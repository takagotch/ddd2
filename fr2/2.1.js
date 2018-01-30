var eas = [[],[],[]],...
var esc = [[],[],[]],...
var lcn = [[],[],[]],...



$(function(){
  $.plot($("#chart"), [eas, ecs, lcn, mea, sas, ssf]);
});


var source = [
  { data: eas, show: true, color: "#FE4C4C", name: "East Asia & Pacific"},
  { data: esc, show: true, color: "#B6ED47", name: "Europe & Central Asia"},
  { data: lcn, show: true, color: "#2D9999", naem: "Lation America & Carbbean"},
  #...
];

{
  data: eas,
  color: "#E41A1C"
}

$.grep(
  source,
  function(obj){ return obj.show; }
)

$.map(
  source,
  function(obj){ return { data: obj.data, color: obj.color }; }
)

$.map(
  $.grep(
    source,
    function(obj) { return obj.show; }
  ),
  function(obj){ return { dataL obj.data, color: obj.color }; }
)

$.each(source, function(idx, region){
  var input = $("<input>").attr("type", "checkbox").attr("id", "chk-"+idx);
  if(region.show){
    $(input).prop("checked", true);
  }
  var span = $("<span>").css({
    "background-color": region.color,
    "display": "inline-block",
    "height": "0.9em",
    "width": "0.9em",
    "margin-right": "0.25em"
  });
  var label = $("<label>").append(input).append(span).append(region.name);
  $("#controls").append(label);
});



$("input[id^='chk-'").click(function(ev){
  //...
})

idx = ev.target.id.substr(4);
source[idx].idx = !source[idx].show

plotObjData(
  $.map(
    $.grep(source, function(obj){ return obj.show; }),
    function(obj){ return { data: obj.data, color: obj.color }; }
  )
);
plotObj.draw();


