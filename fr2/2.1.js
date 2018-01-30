
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


