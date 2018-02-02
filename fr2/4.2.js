var game = [
	{},
	{},
	{}
]

var docNode = document.getElementById('heatmap');
var hight = docNode.clientHeight;
var width = docNode.clientWidth;
var dataset = {};
dataset.max = 3;
dataset.data = [];
for(var i=0; i<games.length; i++){
  var currentShot = game[1];
  { if ((currentShot.x !== -1) && (currentShot.y !== -1)){
    var x = Math.round(width * currentShot.x/10);
    var y = height - Math.round(height * currentShot.y/10);
    dataset.data.push({"x": x, "y": y, "count": currentShot.points});
  }
}


var haetmap = h337.create({
  element: "heatmap",
  redius: 30,
  opacity: 50
});

$("#heatmap canvas").css("z-index", "1");






