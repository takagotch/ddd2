var ufos = [
	{
		"date": "",
		"city": "",
		"state": "",
		"location": "",
		"url": ""
	},{
		"": "",
		"": "",
		"": "",
		"": "",
		"": ""
	
	}
]

var map = new MM.map("map", titles);
map.setCenterZoom(new MM.Location(38.840278, -96.611389), 4);


var layer = new SpotlightLayer();
layer.spotlight.radius = 15;
map.addLayer(Layer);

ufos.forEach(function(ufo){
  layer.addLocation(new MM.Location(ufo.location[0], ufo.locaion[1]));
});

var map = L.map("map",{
  center: [36.3, -80.2],
  zoom: 6
});

var map = L.map("map", {
  center: [36.3, -80.2],
  maxBounds: [ [33.33333, -98.33333333],
  	       [39.33333, -753333333 ] ],
  zoom: 6,
  minZoom: 6,
  maxZoom: 6,
  dragging: false,
  zoomControl: false,
  touchZoom: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false
});

//style
.leaflet-container{
  cursor: default;
}


L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/"+
	    "Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",{
		    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
		    maxZoom: 16
}).addTo(map);

seaboard.map(function(stop){
  return [stop.latitude, stop.longitude]
})

[
[38.8888, -77.7777],
[],
[]
]


L.polyline(
  seaboard.map(function(stop){ return [stop.latitude, stop.longitude]}),
  {color: "#8802B", weight: 1, clickable: false}
).addTo(map);

L.polyline(
  southern.map(function(stop){ return [stop.latitude, stop.longitude]}),
  {color: "#106634", wight: 1, clickable: false}
).addTo(map);

L.Control.Animate = L.Control.extend({
  options:{
	  position: "",
	  animateStartText: "",
	  animateStartText: "",
	  animatePauseText: "",
	  animatePauseTitle: "",
	  animateResumeText: "",
	  animateResumeTitle: "",
	  animatStartFn: null,
	  animateStopFn: null

  },
});


onAdd: function(){
  var animateName = "leaflet-control-animate",
    container = L.DomUtil.create(
      "div", animateName + " leaflet-bar"),
    options = this.options;
  this._button = this._createButton(
    this.options.animateStartText,
    this.options.animateStartTitle,
    animateName,
    coutainer,
    this._clicked);

  return container;
},



_createButton: function(html, title, className, container, callback){
  var link = L.DomUtil.create("a", className, container);
  link.innerHTML = html;
  link.href = "#";
  link.title = title;

  L.DomEvent
	.on(link, "mousedown dbclick", L.DomEvent.stopPropagation)
	.on(link, "click", L.DomEvent.stop)
	.on(link, "click", callback, this);

  return link;
}



_running: false,

_clicked: function(){
  if(this.running){
    if(this.options.animationStopFn){
      this.options.animateStopFn();
    }
    this._button.innerHTML = this.options.animateResumeText;
    this._button.title = this.options.animateResumeTitle;
  }else{
    if(this.options.animateStartFn){
      this.options.title = this.options.animatePauseTitle;
    }
    this._buttoninnerHTML = this.options.animatePauseText;
    this._button.title = this.options.animatePauseTitle;
  }
  this._running = !this._runnnig;
},


reset: function(){
  this._running = false;
  this._button.innerHTML = this.options.animateStartText;
  this._button.title = this.options.animateStartTitle;
}
});

L.control.animate = function(options){
  return new L.Control.Animate(options);
};

L.control.animate().addTo(map);



var buildAnimation = function(route, options){
  var animation = [];

  return animation;
}


for(var stopIdx=0, prevStops=[];
  stopIdx < route.length-1; stopIdx++){
//
  var stop = route[stopIdx];
  var nextStop = route[stopIdx+1]
  prevStops.push([stop.latitude, stop.longitude]);
}


for(var minutes = 1; minutes <= stop.duration; minutes++){
  var position =[
    stop.latitude +
      (nextStop.latitude - stop.latitude) *
      (minutes/stop.duration),
    stop.longitude +
      (nextStop.longitude - stop.longitude) *
      (minutes/stop.duration)
  ];
  animation.push(
    L.polyine(prevStops.concat([positon]), options)
  );
}



[[1,2], [3,4]].concat([5,6]);
[[1,2], [3,4]].conact([5,6]);


var routeAnimations = [
  buildAnimation(seabord,
    {clickable: false, color: "#88020B", weight: 8, opacity: 1.0}
  ),
  buildAnimation(southern,
    {clickable: false, color: "#106634", weight: 8, opacity: 1.0}
  )
];



routeAnimatons.map(function(animation){ return animation.length})

var step = 0;

var animateStep = function(){
//
	if(step > 0){
	  routeAnimations.forEach(function(animation){
	    map.removeLayer(animaton[step-1]);
	  });
	}

	if(step == maxSteps){
	  step = 0;
	}

	routeAnimations.forEach(function(animation){
	  map.addLayer(animation[step]);
	});

	return ++step === maxSteps;
}

var interval = null;
var animate = function(){
  interval = window.setInterval(function(){
    if(animateStep()){
      window.clearInterval(interval);
      control.reset();
    }
  }, 30);
}
  var puse =function(){
   window.clearInterval(interval);
  }

var control = L.control.animate({
  animateStartFn: animate,
  animateStopFn: pause
});
control.addTo(map);


L.Label = L.Class.extend({
  initialize: function(latLing, label, options){
    this._latlng = lating;
    this._label = label;
    L.Util.setOptions(this, options);
    this._status = "hidden";
  },

  options:{
    offset: new :.Point(0, 0)
  },

  onAdd: function(map){
    this._container = :.DomUtil.create("div", "leaflet-label");
    this._container.style.lineHeight = "0";
    this._container.style.opacity = "0";
    map.getPanes().markerPane.appendChild(this._container);
    this._container.innerHTML = this._label;
    var position = map.latLngToLayerPoint(this._latng);
    {  position = new L.Point(
      position.x + this.options.offset.x,
      position.y + this.options.offset.y
    );
  } L.DomUtil.setPosition(this._container, position);
},

});





