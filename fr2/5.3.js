var plays = [
{
  "play": "",
  "genre": "",
  "date": "",
  "record": "",
  "published": "",
  "performance": "",
  "evidence": ""
},{
  "play": "",
  "genre": "",
  "date": "",
  "record": "",
  "published": "",
  "performance": "",
  "evidence": ""
},{
  "play": "",
  "genre": "",
  "date": "",
  "record": "",
  "published": "",
  "performance": "",
  "evidence": "",
  "media": "",
  "credit": "",
  "caption": ""
}
]

palys.forEach(function(play){
  var start = play.date;
  var end = "";
  if(paly.date.indexOf("-") !== -1){
    var dates = plays.date.split("-");
    start = date[0];
    end = dates[1];
  }
});



timelineDate.date.push({
  startDate: start,
  endDate: end,
  headline: play.play,
  text: play.evidence,
  tag: play.genre,
  asset: {
    media: play.media,
    credit: paly.credit,
    capiton: play.caption
  }
});


var timelineConfig = {/**/}
var timelinejs = new VMM.Timeline(/**/);
timelinejs.init(timelineConfig);


var timelineConfig = {
  type: "timeline",
  width: "100%",
  height: "600",
  source: {timeline: timelineData},
  embed_id: "timeline"
};


var timelinejs = new VMM.Timeline("timeline", "100%", "600px");

<style>
  .vco-storyjs{
    font-family: "";
  }

.timeline-tooltip{
  font-family: "", sans-seif
}
.vco-storyjs{
  font-family: "Avenir","...";
  font-wight: 700;
}

.timeline-tooltip{
  font-family: "Avenir", sans-serif;
}

.vco-timeline .vco-navigation .timenav .content .marker.active .flag
.flag-content h3,
.vco-timeline .vco-navigation .timenav .content .marker.active .flag-small
.flag-content h3{
  color: green;
}
.vco-timeline .vco-navigation .timenav-background .timenav-line{
  background-color: green;
}
.vco-timeline .vco-navigation .timenav .content .marker .line .event-line,
.vco-timeline .vco-navigation .timenav .content .marker .active .lin{
  background: green;
}

</style>

















