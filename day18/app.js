window.onload = function() {
  const listItems=document.querySelectorAll('ul.videos li');
  const announce=document.querySelector('div.announcement');
  const lItemsArr=[...listItems];
  const timeArr=lItemsArr.map(i=>i.dataset.time);

  const seconds=timeArr.reduce(function(a,b){
    var minutes=b.split(":")[0];
    var seconds=b.split(":")[1];
    return a+Number(minutes*60+seconds);
  },0);

  for (var i=0;i<lItemsArr.length;i++){
    listItems[i].innerHTML+=' <span class="time">'+lItemsArr[i].dataset.time+'</span>';
  }

  function timePrettyPrint(seconds, short=true) { //DDD:HH:MM:SS
    const days=String(seconds/(60*60*24)).split('.')[0];
    const hours=String((seconds%(60*60*24))/(60*60)).split('.')[0];
    const minutes=String(seconds%(60*60)/60).split('.')[0]; //remainder in seconds / 60 -> minutes
    const secs=String(seconds%60); //remainder when we divide by 60
    return (short) ? days+":"+hours+":"+minutes+":"+secs : days+" days, "+hours+" hours, "+minutes+" minutes, and "+secs+" seconds";
  }

  var stringDisplay="<p>"+timePrettyPrint(seconds, false)+" of video.<br />Wow that's so much video!<br /><em>You're a star!</em></p>";
  announce.innerHTML=stringDisplay;
}
