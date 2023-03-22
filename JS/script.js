// global variables - jQuery selectors for dropdown.val() + amount.val()
// url variable
// ------------------------------------
// TAKE THE USER INPUT FROM THE SELECT + AMOUNT FIELD AND RETURN THE CONVERTED VALUE
// $.get(url + ?convertFrom.val1() & amount & convertTo.val())

// LOG RECENT SEARCHES TO LOCAL STORAGE
var baseURL = "https://api.api-ninjas.com/v1/convertcurrency?";
var XapiKey = "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi";
// var currencyFrom = $('#from-values').val();
// var currencyTo = $('#to-values').val();
// var amount = $('#enter-amount').val();
// var convertedAmount = $('#converted-amount').val();
var button = $("button");
// console.log(currencyFrom)

function convertCurrency() {
  var currencyFrom = $("#from-values").val();
  var currencyTo = $("#to-values").val();
  var amount = $("#enter-amount").val();
  var convertedAmount = $("#converted-amount");
  var button = $("button");
  console.log(currencyFrom);
  console.log(currencyTo);
  console.log(amount);
  $.ajax({
    method: "GET",
    url:
      baseURL +
      "have=" +
      currencyFrom +
      "&want=" +
      currencyTo +
      "&amount=" +
      amount,
    headers: { "X-Api-Key": "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi" },
    contentType: "application/json",
    success: function (result) {
      convertedAmount.text(result.new_amount);
      // $(convertedAmount).text(result.new_amount)

      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

button.click(convertCurrency);
// ------------------example-code------------------------------------------
// $.ajax({
//   method: "GET",
//   url: "https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000",
//   headers: { "X-Api-Key": "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi" },
//   contentType: "application/json",
//   success: function (result) {
//     console.log(result);
//   },
//   error: function ajaxError(jqXHR) {
//     console.error("Error: ", jqXHR.responseText);
//   },
// });

var map = L.map("map", {
  minZoom: 3,
  maxZoom: 8,
  worldCopyJump: true,
}).setView([51.505, -0.09], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var GBP = L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("GBP")
  .openPopup()
  .on("click", selectToUSD);

var CAD = L.marker([55, -110])
  .addTo(map)
  .bindPopup("CAD")
  .openPopup()
  .on("click", selectToUSD);

var EUR = L.marker([40, -3])
  .addTo(map)
  .bindPopup("EUR")
  .openPopup()
  .on("click", selectToUSD);

var CHF = L.marker([47, 8])
  .addTo(map)
  .bindPopup("CHF")
  .openPopup()
  .on("click", selectToUSD);

var HKD = L.marker([23, 113])
  .addTo(map)
  .bindPopup("HKD")
  .openPopup()
  .on("click", selectToUSD);

var AUD = L.marker([-22, 132])
  .addTo(map)
  .bindPopup("AUD")
  .openPopup()
  .on("click", selectToUSD);

var NZD = L.marker([-38, 175])
  .addTo(map)
  .bindPopup("NZD")
  .openPopup()
  .on("click", selectToUSD);

var JPY = L.marker([35, 135])
  .addTo(map)
  .bindPopup("JPY")
  .openPopup()
  .on("click", selectToUSD);

var USD = L.marker([36, -100])
  .addTo(map)
  .bindPopup("USD")
  .openPopup()
  .on("click", selectToUSD);

function selectToUSD() {
  var clickedBtn = $(this);
  var selectFrom = this._popup._content;

  $.ajax({
    method: "GET",
    url: baseURL + "have=" + selectFrom + "&want=" + "USD" + "&amount=" + 1,
    headers: { "X-Api-Key": "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi" },
    contentType: "application/json",
    success: function (result) {
      clickedBtn[0]._popup._content =
        "1 " + selectFrom + " = " + "$ " + result.new_amount + " USD";

      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
