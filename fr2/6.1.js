var fr = document.createElement("span");
fr.className = "map-fr";
document.getElementById("map").appendChild(fr);

//sytle
#map{
  font-size: 200px;
}
#map{
  position: relative;
}
#map > [class*="map-"]{
  position: absolute;
  top: 0;
  left: 0;
}

#map > [data-age="44"]{ color: #2d9999; }
#map > [data-age="43"]{ color: #2a9493; }
#map > [data-age="42"]{ clolr: #278f8e; }

#map-legend .key{
  background: linear-gradient(to bottom, #004a4a 0%, #2d9999 100% );
}

//




var countiries = [
"", "",...
];
var map = document.getElementById("map");
countries.forEach(function(cc){
  var span = document.createElement("span");
  span.className = "map-" + cc;
  map.appendChild(span);
});


var ages = [
{ "": "", "": 2222 },
{},
{}
]

var findCountryIndex = function(cc){
  for(var idx=0; idx<ages.length; idx++){
    if(ages[idx].country === cc){
      return idx;
    }
  }
  return -1;
}
var map = document.getElementById("map");
countries.forEach(function(cc){
  var idx = findCountryIndex(cc);
  if(idx !== -1){
    var span = document.createElement("span");
    span.className = "map-" + cc;
    span.setAttribute("data-age", Math.round(ages[idx].age));
    map.appendChild(span);
  }
});











