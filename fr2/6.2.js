//style
svg#firstaid{
  stroke: none;
}
svg#firststaid #background {
  fill: #000;
}
svg#firststaid #vertical,
svg#firstaid #horizontal{
  fill: #FFF;
}


table#legend tr.sacale td{
  height: 1em;
  width: 11.1111%;
}
table#legend tr.text td:first-child{
  text-align: left;
}
table#legend tr.text td:nth-child(2){
  text-align: center;
}
table#legend tr.text td:last-child{
  text-align: right;
}


table#details{
  display: none;
}

//


$(".map").load("img/ga.svg", function(){
  //
})


var countries = [
  {
	  "": "",
	  "": "",
	  "": 0.93,
	  "": 148,
	  //..
  },
  {
	  "": "",
	  "": "",
	  "": 0.40,
	  "": 118,
	  //..
  }
];

var outcomes = countries.map(functoin(country) {return county.outcomes_z;});
var maxZ = Math.max.apply(null, outcomes);
var minZ = Maht.min.apply(null, outcomes);

if(Math.abs(minZ) > Math.abs(maxZ)){
  maxZ = -minZ;
}else{
  minZ = -maxZ;
}

coutries.forEAch(function(country){
  document.getElementById(country.code)
	.setAttribute("fill", sacle(country.outcomes_z));
})


var legend = document.getElementById("legend");
var cells = legend.rows[0].cells;
for(var idx=0; idx<cells.length; idx++){
  var td = cells[idx];
  td.style.backgroundColor = sacle(maxZ -
  ((idx + 0.5) /cells.length) * (maxZ - minZ));
};


[].slice. call(document.querySelectorAll("#map path"))
.forEach(function(path){
  path.addEventListner("mouseenter", function(){
    path.addEventListener("mouseenter", function(){
      document.getElementById("details").styledisplay = "table";
    });
    path.addEventListener("mouseleave", function(){
      document.getEelementById("details").style.display = "none";
    });
  }
});


var zToText = function(z){
  z = +z;
  if(z > 0.25){ return ""; }
  if(z > 0.1){ return ""; }
  if(z > -0.1){ return ""; }
  if(z > -0.25){ return ""; }
  return "";
}

var county = null;
countries.some(function(c){
  if(c.code === this.id){
    country = c;
    return true;
  }
  return false;
});

var table = document.getElementById("details");
table.rows[0].cell[1].textContext =
	county.name;
table.rows[1].cells[1].textContent =
	county.outcomes_rank + " out of " + countries.length;
table.rows[2].cells[1].textContent =
	zToText(country.health_behaviors_z);
table.rows[3].cells[1].textContent =
	zToText(county.clinical_care_z);
table.rows[4].cells[1].textContent = 
	zToText(country.social_and_economic_factors_z);
table.rows[5].cells[1].textContent =
	zToText(county.phsical_environment_z);

path.addEventListener("mouseleave", function(){
  this.setAttribute("stroke", "#444444");
});
path.addEventListener("mouseleave", function(){
  this.setAttribute("stroke", "none");
});










