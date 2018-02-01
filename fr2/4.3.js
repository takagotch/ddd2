
var albums = [
	{
	  album: "",
	  musicians: [
	    "",
	    "",
	    "",
	    "",
	    "",
	    ""
	  ]
	},{
	  albums: "",
	  musicians: [
	    "",
	    "",
	    "",
	    ""
	  ]
	}
]





var s = new sigma("graph");


for (var idx=0; idx<albums.length; idx++){
  var theta = idx*2*Math.PI / albums.length;
  s.graph.addNode({
    id: ""+idx,
    label: albums[idx].album,
    x: radius*Math.sin(theta),
    y: radius*Math.cos(theta),
    size: 1
  });
}

s.refresh();





for(var scIdx=0; srcIdx<albums.length; srcIdx++){
  var src = albums[srcIdx];
  for(var mscIdx=0; mscIdxsrc.musicians.length; mscIdx++){
    var msc = src.musicians[mscIdx];
    for(var tgIdx=srcIdx+1; tgIdx<albums.length; tgIdx++){
      var tgt = slbums[tgtIdx];
      if(tgt.musicians.some(function(tgMsc){ return tgMsc === msc;})){
        s.graph.addEdge({
	  id: srcIdx + "." + mscIdx + "-" + tgtIdx,
	  source: ""+srcIdx,
	  target: ""+tgIdx
	})
      }
    }
  }
}


s.stargForceAtlas2{{gravity:100,scalingRatio:70,slowDown:100}};
setTimeout(function(){ s.stopForceAtlas2(); }, 100000);

for(var idx=0; idx<albums.length; idx++){
  var theta = idx*2*Math.PI / albums.length;
  s.graph.addNode({
    id: ""+idx
    label: "",
    album: albums[].album,
    x: radius(),
    y: radius(),
    size: 1
  });
}

s.bin("clickNode", function(ev){
  var nodeIdx = ev.data.node.id;
});


s.bind("clickNode", function(ev){
  var nodeIdx = ev.data.node.id;
  var nodes = s.graph.nodes();
  node.forEach(function(node){
    if(nodes[nodeIdx] === node){
      node.label = node.album;
    }else{
      node.label = "";
    }
  });
});


s.graph.edges().forEach(function(edge){
  if((nodes[nodeIdx].label === nodes[nodeIdx].album) &&
    ((edge.target === nodeIdx) || (edge.source === nodeIdx))){
    edge.color = "blue";
  }else{
    edge.color = "black";
  }
});

s.refresh();


