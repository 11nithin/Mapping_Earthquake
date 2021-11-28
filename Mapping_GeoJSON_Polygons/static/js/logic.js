// Add console.log to check to see if our code is working.
console.log("working");



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};



// Create the map object with center and zoom level.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
}
);

L.control.layers(baseMaps).addTo(map);



// Coordinates for each point to be used in the line.
let torontoHoods = "https://raw.githubusercontent.com/11nithin/Mapping_Earthquake/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json"


 // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data){
    console.log(data);
    L.geoJSON(data,{
        color: "#ffffa2",
        weight: 1,
        onEachFeature: function(feature,layer){
            layer.bindPopup("<h2>Area:" + feature.properties.AREA_NAME+ "</h2><hr><h3>AreaCD:" + feature.properties.AREA_S_CD +" </h3>" );
        }
    }).addTo(map);
});




