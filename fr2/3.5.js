
//$("#stock").sparkline($.map(stock, function(wk){ return wk.adj_close; }));

$("#stock")
.sparkline($.map(stock, function(wk) {  return wk.adj_close; }))
.on("sparklineClick", function(ev){
  var sparkline = ev.sparklines[0],
  region = sparkline.getCurrentRegionFields();
  /* region.x region.y */
});


//.on("sparklineClick", function(ev){
//  $("#widget").show();
//  $("#wiget").hide();
//  $("#stock").hide();
//});

//$("#widget-control a").click(fucntion(ev){
//  ev.preventDefault();
//  $("#widget").hide();
//  $("#widget").hide();
//  $("#stock").show();
//})

//$("#stock")
//  .sparkline(
//    $.map(stock, function(wk) { return wk.adj_close; }),
//    { tooltipFormatter: functio() { return "Click for details"; } }
//  );

.on("sparklineClick", function(ev){
  $("#widget").slideDown();
  $("#wideget-control").sideDown();
  $("#stock").slideUP();
});
$("#widget-control a").click(function(ev){
  ev.preventDefault();
  $("#widget").slideUp();
  $("#widget-control").slideUp();
  $("#stock").slideDown();
})






