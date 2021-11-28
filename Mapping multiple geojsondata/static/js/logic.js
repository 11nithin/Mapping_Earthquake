// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([44.0, -80.0], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
let torontoData = "https://raw.githubusercontent.com/11nithin/Mapping_Earthquake/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
 // Grabbing our GeoJSON data.
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
     style:  myStyle
  }).bindPopup("<h2>Airline:" + data.features[0].properties.airline+ "</h2><hr><h3>Airline code:" + data.features[0].properties.airline_id +" </h3>"  ).addTo(map);
});





