var tags = [
[],
[],
[],
[]
]

<style>
	#cloud span{
	  cursor: pointer;
	}	
</style>

var clicked = function(ev){
  if(ev.target.nodeName === "SPAN"){
    var tag = ev.target.textContent;
  }
}


var clicked = function(ev){
  if(ev.target.nodeName === "SPAN"){
    var tag = ev.target.textContent;
    var clickedTag;
    tags.some(function(el){ //.some()
      if(el[0] === tag){  //.some()
        clickedTag = el;
	return true; //.some()
      }
      return true;  //.some()
    });
  }
}


var clicked = function(ev){
  var details = "";
  if(ev.target.nodeName === "SPAN"){
    var tag = ev.target.textContent,
      clickedTag;
    if(tags.some(function(el){
      if(el[0] === tag){
        clickedTag = el;
	return true;
      }
      return false;
    })){
        details = "xxx" + clickedTag[1] +
		" xxx\"" + tag + "\"";
    }
  }
  document.getElementById("details").innerText = details;
//document.getElementById("cloud").addEventListner("click", clicked)
}










