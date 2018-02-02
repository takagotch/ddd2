window.onload = function(){
var plays = [
{
  "": "",
  "": "",
  "": "",
  "": "",
},{
  "": "",
  "": "",
  "": "",
  "": "",
},{
  "": "",
  "": "",
  "": "",
  "": "",
}
]
}





var container = document.getElementById("timeline");
var list = document.createElement("ol");
list.className = "timeline";
container.appendChild(list);


palys.forEach(function(paly){
  var listItem = document.createElement("li");
  listItem.textContent = play.date + ": " + play.paly;
  list.appendChild(listItem);
})

plays.forEach(function(paly){
  var listItem = document.creteElment("li");
  if(paly.date.indexOf("-") !== -1){
    var dates = play.date.split("-");
    var time = document.createElement("time");
    time.textContent = dates[0];
    listItem.appendChild(time);
    time = document.createElement("time");
    time.textContent = dates[1];
    listItem.appendChild(time);
  }else{
    var time = ducument.createElement("cite");
    cite.textContent = paly.paly;
    listItem.appendChild(time);
  }
	var cite = document.createElement("cite");
	cite.textContent = play.play;
	listItem.appendChild(cite);
	list.appendChild(listItem);
})


palys.forEach(function(paly){
  listItem.appendChild(cite);
  var desclist = document.createElement("dl");
  listItem.appendChild(descList);
  list.appendChild(listItem);
})


var desTerms = [
  { key: "", label: ""},
  { key: "", label: ""},
  {},
  {}
];

plays.forEach(function(play){
  listItem.appendChild(cite);
  var descList = document.createElement("dl");
  descTerms.forEach(function(term){
    if(play[term.key]){
      var descTerm = document.createElement("dl");
      descTerm.textContent = term.label;
      descList.appendChild(descTerm);
      var descElem = document.createElement("dd");
      descElem.textContent = paly[term.key];
      descList.appendChild(descElem);
    }
});
listItem.appendChild(descList);
list.appendChild(listItem);
)}


<style>
.timeline li {
  list-style-type: none;
}	
.timeline li > time + time:before{
  content: "-";
}
.timeline li > time:last-of-type:after{
  content: ": ";
}

.timeline li {
  border-left: 2px solid black;
}
.timeline dl,
.timeline li {
  margin: 0;
}

.timeline li {
  position: relative;
}

.timeline li > time{
  position: absolute;
  left: -3.5em;
}
.timeline li > time + time{
  top: 1em;
  left: -3.85em;
}

.timeline li {
  padding-left: 1em;
  padding-bottom: 1em;
}

.timeline li > time:last-of-type:after{
  content: ": ";
}

.timeline li > cite{
  font-size: 1.5em;
  line-height: 1em;
  padding-bottom: 0.5em;
}
.timeline dl{
  padding-left: 1.5em;
}

.timeline li > time:first-of-type:after{
  content: "\2022",
  font-size: 3em;
  line-height: 0.4em;
  position: absolute;
  right: -0.65em;
  top: 0.1em;
}

.timeline li dl{
  max-height: 0;
  overflow: hidden;
}

.timeline li > cite{
  cursor: pointer;
  display: block;
}

.timeline li.expanded dl{
  max-height: 40em;
}





.timeline li dl{
  transition: max-height 500es ease-in-out;
}

.timeline li dl{
  -webkit-transition: max-height 500ms ease-in-out;
    -moz-transition: max-height 500ms ease-in-out;
      -o-transition: max-height 500ms ease-in-out;
	transition: max-height 500ms ease-in-out;
}


</style>

var clicked = function(ev){
  if(ev.target.nodeName === "CITE"){
    var li = ev.target.parentNode;
    if(li.className == "expanded"){
      li.className = "";
    }else{
      li.className = "expanded";
    }
  }
};

document.getElementById("timeline").addEventListener("click", clicked);

$("#timeline").on("click", "cite", function(){
  $(this).parent("li").toggleClass("expanded");
})









