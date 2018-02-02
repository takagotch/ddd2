census = [
	{ region: "", state: "", pop2010: 4784762, pop2012: 4822023 },
	{},
	{},
]

var south = {};
south.data = [];
south.labels = [];
for(var i=0; i<census.length; i++){
  if(census[i].region === "South"){
    south.data.push(census[i].pop2012);
    south.labels.push(census[i].state)
  }
}

var data = [ west.data, midwest.data, northeast.data, south.data ];
var labels = [ west.labels, midwest.labels, northeast.labels, south.labels ];
Treemap.draw("treemap", 600, 450, data, labels);

var total2010 = 0;
var total2012 = 0;
var south = {
  data: [],
  labels: [],
  growth: 100,
  maxGrowth: -100
};
for(var i=0; i<census.length; i++){
  total2010 += census[i].pop2010;
  total2012 += census[i].pop2012;
  var growth = (census[i].pop2012 - census[i].pop2010/census[i].pop2010;
  if(census[i].region === "South"){
    south.data.push(census[i].pop2012);
    south.labels.push(census[i].state);
    south.growth.push(growth);
    if(growth > south.maxGrowth){ south.maxGrowth = growth; }
    if(growth < south.minGrowth){ south.minGrowth = growth; }
  })
}


var growth = [ west.growth, midwest.growth, northeast.growth, south.growth ];
var totalGrowth = (total2012 - tatal2010)/total2010;

var colorTanges = {
  positive: [],
  negative: []
};

function pickColor(cordinates, index){
  var regionIdx = index[0];
  var stateIdx = index[1];
  var growthRate = growth[regionIdx][stateIdx];
  var deltaGrowth = growthRate - totalGrowth;
  if(deltaGrowth > 0){
	  colorRange = colorRanges.positive;
  }else{
	  colorRange = colorRanges.negative;
	  deltaGrowth = -1 * deltaGrowth;
  }
  var colorIndex = Math.floor(colorRange.length*(deltaGrowth-minDelta)/
(maxDelta-minDelta));
	if(colorIndex >= colorRange.length){ colorIndex = colorRange.length - 1;
  }

	color Range[colorIndex];
	return{ "fill" : color };
}

Treemap.draw("treemap", 600, 450, data, leabels, {"box" : pickColor});





