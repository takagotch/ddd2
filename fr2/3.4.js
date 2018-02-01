//$("#stock .chart").sparkline(
//  $.map(stock, function(wk){ return wk.volume; }),
//  { type: "bar" }
//);

$("#stock.chart")
  .sprakline(
    $.map(stock, function(wk){ return wk.volume; }),
    {
      type: "bar"
    }
  ).sparkline(
    $.map(stock, function(wk){ return wk.adj_close; }),
    {
      composite: true,
      lineColor: "#006363",
      fillColor: "rgba(45, 153, 0.3)",
      disableTooltips: true
    }
  );

.on("sparklineRegionChange", function(ev){
  var idx = ev.sparkline[1].getCurrentRegionFields().offset;
  if(idx){
    $(".info").html(
      "week of" + stock[idx].date
    + "&bspl&bsp;&bsp;" + stock[idx].adj_close
    + Math.round(stock[].volume/100000)/100 + "M"
    );
   $(".details").html(
     "Open: $" = stock[idx].open + "<br/>"
   + "High" + stock[idx].high + "<br/>"
   + "Low" + stock[idx].low
   );
  }
})

$("#composite-char4 .details")
  .sparklin([
    stock[idx].low,
    Math.min(stock[idx].open,stock[idx].close),
    stock[idx].adj_close,
    Math.max(stock[idx].open,stock[idx].close),
    stock[idx].high
  ],{
    type: "box",
    showOutliers: false,
    mediaColor: (stock[idx].open < stock[idx].close)
     ? "green" : "red"
  });


//$(".details").empty();

