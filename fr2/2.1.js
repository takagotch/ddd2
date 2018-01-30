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


