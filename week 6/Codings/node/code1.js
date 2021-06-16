//Use the below Ajax syntax to load the data of the cities (cities.json) $.ajax({ url: "https://api.jsonbin.io/b/5ddb7fe5040d843991f8a4e5", headers: {"secret-key": "$2b$10$u3A2D8i3xZI9s1Bq/YihAuje8T/nq4C0ulejX8TgqV2OCY1rijESi"}, success: function(response){ console.log("done"); } });

//Load the data and then write a Javascript function that takes a letter and finds all the cities that starts with that letter.
var cities = [];
var searchedCities = [];
$(document).ready(function () {
  cities.json;
  $.ajax({
    url: "https://api.jsonbin.io/b/5ddb7fe5040d843991f8a4e5",
    headers: {
      "secret-key":
        "$2b$10$u3A2D8i3xZI9s1Bq/YihAuje8T/nq4C0ulejX8TgqV2OCY1rijESi",
    },
    success: function (response) {
      cities = response;
      //   console.log(cities)
    },
  });
});

// console.log(Cities)
function getCities() {
  var searchvalue = $("#searchbar").val();
  // console.log(searchvalue)
  var searchedCities = [];
  cities.forEach(function (city) {
    if (city.name[0] === searchvalue.toUpperCase()) {
      searchedCities.push(city.name);
    }
  });

  console.log(searchedCities);
  $("#listofcities").text("cities are" + searchedCities.join(","));
}

$("input").keyup(function () {
  getCities();
});
