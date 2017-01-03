window.onload = function()
{
  const hourHand = document.querySelector('div.hour-hand');
  const minuteHand = document.querySelector('div.minute-hand');
  const secondHand = document.querySelector('div.second-hand');
  const ticking = setInterval(tickingClock,1000);

  function tickingClock() {
    const tick = new Date(Date.now())
    const hours = tick.getHours();
    const minutes = tick.getMinutes();
    const seconds = tick.getSeconds();
    console.log(hours+":"+minutes+":"+seconds);

    //270 degrees is the zero point
    //360 degrees is 15 seconds

    //hours has "ticks" of 12 but we want it to actually move partway as the minutes change
    //we have 30 degrees per hour
    //every minute add 0.5 degrees of rotation to hours
    //so let's divide each hour into 6 10-minute periods of 5 degrees each
    //we'll make hour degrees dependent on minutes, adding 5 degrees for each 10 minutes
    const hourTicks = 360/12;
    const minSecTicks = 360/60; //minutes and seconds have "ticks" of 60

    //12 o'clock is 270 degrees
    const hourDegrees = 270+(hours*hourTicks)+(minutes*0.5);
    const minuteDegrees = 270+(minutes*minSecTicks);
    const secondDegrees = 270+(seconds*minSecTicks);

    //don't try to animate changing the degrees from 630 -> 270. it's ugly!
    (seconds===0) ? secondHand.classList.add('notransition') : secondHand.classList.remove('notransition');

    hourHand.style.transform="rotate("+hourDegrees+"deg)";
    minuteHand.style.transform="rotate("+minuteDegrees+"deg)";
    secondHand.style.transform="rotate("+secondDegrees+"deg)";

    console.log(hourDegrees+"min: "+minuteDegrees+" "+secondDegrees);

    const clock = document.querySelector('div.clock-display');
    clock.innerHTML=null;
    var timeDisplay=hours+":";
    if ((minutes<10)) {
      timeDisplay+="0"+minutes+":";
    }  else { timeDisplay+=minutes+":";}
    if ((seconds<10)) {
      timeDisplay+="0"+seconds;
    } else { timeDisplay+=seconds; }
    clock.append(timeDisplay);
    console.log("tick: "+tick);
  }
}
