(function getData(){
  setTimeout(function(){
    $.ajax({ url: "/api/data", success: function(data){
      //...
      $("#chart").sparkline(data);
      $("#value").text(data.slice(-1));
      getData();
    }, dataType: "json"});
  }, 300000);
})();



