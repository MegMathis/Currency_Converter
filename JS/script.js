// global variables - jQuery selectors for dropdown.val() + amount.val()
// url variable
// ------------------------------------
// TAKE THE USER INPUT FROM THE SELECT + AMOUNT FIELD AND RETURN THE CONVERTED VALUE
// $.get(url + ?convertFrom.val1() & amount & convertTo.val())

// LOG RECENT SEARCHES TO LOCAL STORAGE
var baseURL2 = "https://api.api-ninjas.com/v1/convertcurrency";
var XapiKey = "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi";

$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000",
  headers: { "X-Api-Key": "M0vu/BzO4EbdPftHtN5CgA==q1HuSPxAewTNC1hi" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

var map = L.map("map", {
  minZoom: 3,
  maxZoom: 8,
  worldCopyJump: true,
}).setView([51.505, -0.09], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
