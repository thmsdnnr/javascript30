window.onload=function(){
  var timers=[['20 Seconds',20],['Work 5',(60*5)],['Quick 15',(60*15)],['Snack 20',(60*20)],['Lunch Break',(60*60)]]; //name, duration in seconds

  function start() {
    populateTimers(timers);
    attachListeners();
    timer(120);
  }

  let timerInterval;
  let lastTimer;

  const timeDisplay=document.querySelector('div.timer');
  const nav=document.querySelector('nav');

  function populateTimers(timers) {
    timers.forEach((t)=>{
      let d=document.createElement('div');
      d.innerHTML=t[0];
      d.setAttribute('data-time',t[1]);
      d.classList+='timerSuggestion';
      nav.appendChild(d);
    });
    let d=document.createElement('div');
    let f=document.querySelector('footer');
    d.innerHTML+=`<button id="reset">RESET</button>`;
    d.innerHTML+=`<label for "custom">Enter your own:</label><input type="number" id="custom" pattern="[0-9]{2,5}" title="Time Interval in Seconds" max="${24*60*60}">`;
    d.classList+='custom';
    f.append(d);
  }

  function timer(seconds) {
    lastTimer=seconds;
    //console.log(seconds);
    let then=Date.now()+((seconds)*1000+1000);
    timerInterval = setInterval(()=>{
      let rightNow=Date.now();
      let secondsLeft=Math.round((then-rightNow)/1000);
      displayTimeLeft(secondsLeft,then);
      if (rightNow>then) { clearInterval(timerInterval); }
    },1000);
  }

  function displayTimeLeft(seconds,then) {
    let d=new Date(then);
    let endMinutes = d.getMinutes();
    (endMinutes > 9) ? 0 : endMinutes = "0"+endMinutes;
    let endHour = d.getHours();
    let afternoon = (endHour>=12);
    let timeString;
    (afternoon) ? timeString=`${endHour-12}:${endMinutes} pm` : timeString=`${endHour}:${endMinutes} am`;
    let min=Math.floor(seconds/60);
    let sec=seconds%60;
    timeDisplay.innerHTML=`<p>${min}:${(sec > 9 ? sec : "0"+sec)}</p>`;
    timeDisplay.innerHTML+=`<p>Back at: ${timeString}</p>`;
  }

  function attachListeners() {
  //attach listeners
  const suggestions=document.querySelectorAll('div.timerSuggestion');
  suggestions.forEach((s)=>s.addEventListener('click',handleSuggestion));
  console.log(suggestions);
  //create timers from existing links
  function handleSuggestion(e) {
    console.log(e);
    if(!e.target.dataset.time) {return false;}
    window.clearInterval(timerInterval);
    timer(e.target.dataset.time);
  }

  const custom=document.querySelector('input#custom');
  custom.addEventListener('keydown',customTimer);

  //get custom timer duration and name
  function customTimer(e){
    if ((e.target.value<=86400)&&(e.keyCode===13)){ //enter pressed
      console.log(e);
    window.clearInterval(timerInterval);
    timer(e.target.value);
    }
  }

  const foot=document.querySelector('footer');
  document.querySelector('button#reset').addEventListener('click',reset,false);
  function reset() {
    clearInterval(timerInterval);
    document.querySelector('button#reset').addEventListener('click',reset,false);
    timer(lastTimer);
  }
}
  start();
}
