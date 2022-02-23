var mymap = L.map('mapid').setView([37.0902, -95.7129], 4);

var OpenStreetMap_Mapnik = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 19,
  minZoom: 4,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

var fire = $.getJSON("https://raw.githubusercontent.com/JReilly55/Project-Leaflet/main/USA_Current_Wildfires.geojson",function(data){
    var Icon = L.icon({
    iconUrl: 'https://www.mfc.ms.gov/wp-content/uploads/2020/11/Smokey-Head.png',
    iconSize: [30,30]
  }); 
  
  L.geoJson(data,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: Icon});
    }
  }).addTo(mymap);
});

$.getJSON("https://raw.githubusercontent.com/JReilly55/Project-Leaflet/main/Drought%20(1).geojson",function(data2){
  L.geoJson(data2, {
    style: function(feature) {
        switch (feature.properties.DM) {
            case 0: return {color: "#FFFF00"};
            case 1: return {color: "#FCD37F"};
            case 2: return {color: "#FFAA00"};
            case 3: return {color: "#E60000"};
            case 4: return {color: "#730000"};
        }
    }
}).addTo(mymap);
});
