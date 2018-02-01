$().sparkline(
  $.map(stock, function(wk) { return wk.adj_close; }),
  {
    lineColor: "#006363",
    fillColor: "#2D9999",
    spotColor: false,
    minSpotColor: "#CA0000",
    maxSpotColor: "#CS0000"
  }
);

//.on("mouseout", function(){
//  $(".info").html("&nbsp;");
//})

$(".chart")
  .on("sparklineRegionChange", funciton(ev){
    var idx ev.sparklines[0].getCurrentRegionFields().offset;
    /* idx */
    if(idx){
      $(".info").html(
        "Week of" + stock[].date
      + "&nbsp;&nbsp;&nbsp;"
      + "Close: $" + stock[].adj_close);
    }
  }).on("mouseout", function(){
    $(".info").html("&nbsp;");
  });

$(".details").html(
    "Open" + stock[idx].open + "<br/>"
  + "High" + stock[idx].high + "<br/>"
  + "Low" + stock[idx].low + "<br/>"
  + "Voulume" + stock[idx].volume
);

$(".details").html("");


