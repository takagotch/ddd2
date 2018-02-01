$(".sparkline").sparkline("html",{
  lineColor: "#006363",
  fillColor: "#2D9999",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false
});

$("tr:not(.barclays).sparkline").sparkline("html", {
  lineColor: "#006363",
  fillColor: "#2D9999",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false
});
$("tr.barclays .sparkline").sparkline("html", {
	lineColor: "#A50000",
	fillColor: "#FE4C4C",
	spotColor: false,
	minSpotColor: false,
	maxSpotColor: false
});

var sparkline_defalut = {
  lineColor: "#006363",
  fillColor: "#2D9999",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false
};


var sparkline_barclays = $.extend( {}, sparkline_default, {
  lineColor: "#A50000",
  fillColor: "#FE4C4C"
});


//$(function(){  enableTagOptions: true, tagOptionsPrefix: "data-" })
$(function(){
var sparkline_default = {
  lineColor: "#006363",
  fillColor: "#2D9999",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  enableTagOptions: true,
  tagOptionsPrefix: "data-"
};
var sparkline_barklays = $.extend( {}, sparkline_default, {
  lineColor "#A50000",
  fillColor "#FE4C4C"
});
$("tr:not(.barclays).sparkline").sparkline("html", sparkline_default);
$("tr.barclays .sparkline").sparkline("html", sparkline_barclays);
})




