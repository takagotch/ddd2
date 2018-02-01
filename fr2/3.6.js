.on("sparklineClick", function(ev){
  $("#widget")/slideDown();
  $("#widget-control").slideDown();
  $("#stock").slideUp();
});
$("#midget-control a").click(function(ev){
  ev.preventDefault();
  $("#widget").slideUp();
  $("$widget-control").slideUp();
  $("#stock").slideDown();
})


