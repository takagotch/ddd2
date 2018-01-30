
Flotr.draw(
  document.getElementById("chart"),
  [{
    data: get_points(katrina),
    bubles: {show:true, baseRadius: 0.3}
  }]
);




var players = [
  { players: "", points: 17.2, rebounds: 7.9, assists: 1.6, steals: 0.8, blocks: 0.8 },
  { palyers: "", points: 5.4, rebounds: 2.6, assists: 1.2, steals: 1.0, blocks: 0.5 },
  #...
];
var team = {
  points: 98.2,
  rebounds: 41.3,
  assists: 19.3,
  steals: 8.5,
  blocks: 5.3
}

var get_player = function(name){
  for(var i=0; i<players.length; i++ i++){
    if(players[i].player === name) return players[i];
  }
}
var player_data = function(name){
  var obj = {}, i = 0;
  obj.label = name;
  obj.data = [];
  for(var key in team){
    obj.data.push([i, 100*get_player(name)[key]/team[key]]);
    i++;
  };
  return obj;
};

{
  label: "LeVron James",
  data: [
    [],
    [],
    #...
  ]
}


var labels = [
  [],
  [],
  ...
];

Flotr.draw(document.getElementById("chart")),
[
  player_data(""),
  player_date(""),
  #...
],{
  title: "",
  radar: { show: true },
  grid: { circular: true },
  xaxis: { tickes: labels, },
  yaxis: { showLabels: false, min:0, max: 33, }
};



