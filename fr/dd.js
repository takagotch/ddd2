var list = tags.map(function(word){
  return [wprd[0], Math.round(word[1]/10000)];
});

var list = function(ev){
  if(ev.target.nodeName === "SPAN"){
    //
  }
}

var clicked = function(ev){
  if (ev.target.nodeName === "SPAN") {
    var tag = ev.target.textContext
  }
}

var clicked = function(ev){
  if (ev.target.nodeName === "SPAN") {
    var tag = ev.target.textContent;
	  var clickedTag;
	  tags.some(function(el){
	    if (el[0] === tag){
	      clickedTag = el;
		    return true;
	    }
		  return false;
	  });
  }
}

var clicked = function(ev){
  var details = "";
	if () {
	  var tag = ev.target.textContent,
			clickedTag;
		if(tags.some(cunction(el){
		  if(el[0] === tag){
		    clickedTag = el;
			  return true;
		  }
			return false;
		})){
		  details = "" + clickedTag[1] +
				"" + tag +"";
		}
	}
	document.getElement().innerText = details;
}

document.getElementById("cloud").addEventListener("click", clicked)


