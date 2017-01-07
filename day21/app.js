window.onload = function() {
  var options = {
    enableHighAccuracy:true,
    timeout:2000,
    maximumAge:0
  };

let lastTime;
let currentTime;
let lastSpeed;
let currentSpeed;
let totalTime;

let mileDistance=0;
let meterDistance=0;

function calcDistance(pos) { // rate x time brah
  lastTime=currentTime;
  lastSpeed=currentSpeed;
  currentTime=pos.timestamp;
  currentSpeed=pos.coords.speed;
  totalTime+=currentTime-lastTime; // in ms
  let duration;
  let distanceToAdd;
  if (lastTime&&lastSpeed) {
    duration=((currentTime-lastTime)/1000)/(60*60); // we need duration in HOURS
    distanceToAdd=duration*mpsToMPH(((currentSpeed+lastSpeed)/2)); //average out the speeds to hopefully get more accurate result
    mileDistance+=distanceToAdd; // miles
    meterDistance+=milesToMeters(distanceToAdd);
  }
}

  function success(pos) {
    calcDistance(pos)
    displayStuff(pos);
    console.dir(pos);
  }

  function error(err) { console.error(err.message); }

  function mpsToMPH(mps) {return mps*3600*0.000621371.toFixed(1);}
  function milesToMeters(miles) {return miles/1609.34;}

  const HUD = document.querySelector('div.speedo');

  function displayStuff(pos) {
    let timeDisplay = Math.floor(totalTime/60*1000)+":"+(totalTime/1000%60);
    (timeDisplay.split(":")[0]!==("NaN")) ? timeDisplay : timeDisplay="";
    HUD.innerHTML=null;
    HUD.innerHTML+=`<p><h3>Distance Traveled:</h3> ${mileDistance} miles / ${meterDistance} meters<br />`;
    HUD.innerHTML+=`<p><h3>Time Traveled:</h3> ${timeDisplay}`
    HUD.innerHTML+=`<p><h3>Current Speed:</h3> ${mpsToMPH(pos.coords.speed)} mph<br />`;
    HUD.innerHTML+=`<h3>Current Heading:</h3> ${pos.coords.heading} degrees<br />`;
    HUD.innerHTML+=`<h3>Current Altitude (+/-):</h3> ${pos.coords.altitude} (+/-${pos.coords.altitudeAccuracy})<br />`;
    HUD.innerHTML+=`<h3>Position Accuracy:</h3> ${pos.coords.accuracy}<br />`;
    HUD.innerHTML+=`<h3>Latitude/Longitude:</h3> ${pos.coords.latitude} ${pos.coords.longitude}</p>`;
  }
   // meters  *  seconds  *  miles
   // seconds    hours       meter
  id = navigator.geolocation.watchPosition(success,error,options);
  getLocalBusinesses();
   //speed in m/s*3600*000621371
  }
