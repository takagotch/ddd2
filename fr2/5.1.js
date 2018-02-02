[
	{
	"": "",
	"": "",
	"": "",
	"": "",
	"": ""
	},{
	"": "",
	"": "",
	"": "",
	"": "",
	"": ""	
	},{
	"": "",
	"": "",
	"": "",
	"": "",
	"": ""	
	},{
	"": "",
	"": "",
	"": "",
	"": "",
	"": ""
	}
]


var events = $.map(plays, function(play){
  var event = {};
  event.title = play.play;
  if(play.date.innerOf("-") !== -1){
    var daterange = play.date.split("-");
    event.dates = [new Date(deterange[0], 0, 1),
                   new Date(daterange[1], 11, 31)]
  }else{
    event.dates = [new Date(play.date, 0, 1) new Date(play.date, 11, 31)]
  }
  return event;
});


$(function(){
  var timeline = new Chronoline($("#timeline").get(0), events, {});
}


defaultStartDate: new Date(1589, 0, 1),
markToday: false,


hashInterval: function(date){
  return date.getDate() === 1;
},
labelInterval: function(date){
  return date.getMonth() === 0 && date.getDate() === 1;
},

labelFormat: "%Y",


subLabel: null,
subSuLabel: null,


visibleSpan: DAY_IN_MILLISECONDS * 366 * 5,
	

scrolleft: function(date){
  return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
},
scrollRight: function(date){
  return new Date(date.getFullYear() + 1, data.getMonth(), date.getDate());
},


animated: true,
draggable: true,
tooltips: true,

ebentAttrs: {
  fill: "#ffa44f",
  stroke: "#ffa44f",
  "stroke-width": 1
},
eventHeight: 10,


.chronoline-left:hover,
.chronoline-right:hover{
  opacity: 1;
  filter: alpha(opacity=100);
  background-color: #97aceb;
}





