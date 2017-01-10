window.onload = function() {

  //global video flags
  let isMuted=false;
  let theaterMode=false;
  let lastVolume;
  let aspectRatio=0;

    window.setInterval(function() { //things to do every second
      moveSlider();
      updateTime();
    },1000);

    calculateAndDisplay(1); // start video player with scale = 1.

  //window event listeners
  document.addEventListener('mousedown',trackMouseHeld);
  document.addEventListener('mouseup',trackMouseHeld);

  function trackMouseHeld(e) { (e.type==="mousedown") ? mouseHeld=true : mouseHeld=false; }

  const video = document.querySelector('video.player');
  const playerContainer = document.querySelector('div#player');
  const controls = document.querySelector('div#controls');

  function calculateAndDisplay(scaleFactor=1,resize=false) {
    const video = document.querySelector('video.player');
    const playerContainer = document.querySelector('div#player');
    const controls = document.querySelector('div#controls');
    //video.videoWidth and video.videoHeight are native width and height
    aspectRatio=video.width/video.height;
    if (!resize) {
    let newSize=scale(video.videoWidth,video.videoHeight,scaleFactor); //scale down by 4, 1 leaves untouched
    video.width=newSize[0];
    video.height=newSize[1];
    }

    //container dimensions
    playerContainer.style.width=video.width; //video width and height are NUMBERS, style.width and height are strings: NUMBER+'px'
    playerContainer.style.height=video.height;

    //control box "appear on hover" dimensions
    controls.style.width=video.width-2;
    controls.style.top=video.height-47;

    //progress bar dimensions
    let seek=document.querySelector('input#seek');
    seek.style.width=`${video.width-4}px`;
    seek.style.paddingLeft=`2px`;
    seek.style.paddingRight=`2px`;
    seek.max=video.width;
    seek.value=0;

    playerContainer.addEventListener('mouseover',function(e){showControls();});
    playerContainer.addEventListener('mouseleave',hideControls);
}

  function showControls() {controls.classList.add('visible');}
  function hideControls() {controls.classList.remove('visible');}

  function scale(x,y,factor) { //scales x and y by a factor, maintaining aspect ratio
    let aspectRatio=x/y;
    let newX;
    let newY;
    newY = y/factor;
    newX = newY*aspectRatio;
    return [Math.floor(newX),Math.floor(newY)];
  }

//seek back
  let seek=document.querySelector('input#seek');
  seek.addEventListener('change',scrubVideo);

  function scrubVideo(e){
    //slider position by default is:
    //Math.round((video.currentTime/video.duration)*video.width);
    //so we can obtain the new video.currentTime simply by dividing e.target.value by width and multiplying by duration
    video.currentTime=(e.target.value/video.width)*video.duration;
  }

  function moveSlider() {
    const seek=document.querySelector('input#seek');
    let video = document.querySelector('video.player');
    let position=Math.round((video.currentTime/video.duration)*video.width);
    seek.value=position;
  }

//current time in video display
  function formatTime(seconds) {
    if (seconds<60) { return (seconds<10) ? `0:0${Math.floor(seconds)}` : `0:${Math.floor(seconds)}`; }
    else {
      let minutes=Math.floor(seconds/60);
      let sec=seconds%60;
      (sec<10) ? sec=`0${Math.floor(sec)}` : sec=`${Math.floor(sec)}`;
      return `${minutes}:${sec}`;
    }
  }

  function updateTime() {
    let video = document.querySelector('video.player');
    let now=video.currentTime;
    let vLength=video.duration;
    let timeString=`${formatTime(now)} / ${formatTime(vLength)}`;
    let timeD=document.querySelector('span#videoTime');
    timeD.innerHTML=`${timeString}`; //video.currentTime
  }

//play - pause
  let isPlaying=false;
  const playPause = document.querySelector('span#play');
  playPause.addEventListener('click',togglePlay);

  function togglePlay(){
    playPause.innerHTML=null;
    (isPlaying) ? playPause.innerHTML = `<img src="./images/play.svg">` : playPause.innerHTML = `<img src="./images/pause.svg">`;
    (isPlaying) ? video.pause() : video.play();
    isPlaying=!isPlaying;
  }

//skip forward
  const forward=document.querySelector('img#f');
  forward.addEventListener('click',skip);
//skip backward
  const backward=document.querySelector('img#b');
  backward.addEventListener('click',skip);

  function skip(e,amount=10) {
    let dir=0;
    (e.target.id==='f') ? dir=1 : dir=-1;
    let seekRange={start:video.seekable.start(0),end:video.seekable.end(0)};
    let newTime=video.currentTime+=(dir*amount);
    let isInRange = (newTime>seekRange.start)&&(newTime<seekRange.end);
    if (isInRange) { video.currentTime=newTime; }
    else { console.err('out of range'); console.err(video.currentTime);}
  }

//volume slider with speaker hover
  const speaker=document.querySelector('span#volume');
  const speakerImg=document.querySelector('img#volume');
  const vol=document.querySelector('input#volume');
  speaker.addEventListener('mouseover',displayVolume);
  speaker.addEventListener('mouseleave',hideVolume);

  speakerImg.addEventListener('click',toggleMute);

  function displayVolume() { vol.classList.add('visible'); }
  function hideVolume() { vol.classList.remove('visible'); }

  function toggleMute() { //TODO and toggle speaker image
    let vImg=document.querySelector('img#volume');
    if (!isMuted) {
      lastVol=vol.value; //remember last volume to reset upon unmute
      volumeAdjust(null,0);
      vol.value=0;
      isMuted=true;
      vImg.src='./images/mute.svg'; //">` : playPause.innerHTML = `<img src="./images/pause.svg">`;
      //toggle speaker image to be muted
    }
    else { //TODO toggle speaker image to be unmuted
      volumeAdjust(null,lastVol);
      vol.value=lastVol;
      isMuted=false;
      vImg.src='./images/volume.svg';
    }
  }

  const volume=document.querySelector('input#volume');
  volume.addEventListener('change',volumeAdjust);

  function volumeAdjust(e,setValue) {
    if (e) { video.volume=e.target.value; }
    else { video.volume=setValue; }
  }

  //theater mode
  const tMode=document.querySelector('span#theaterMode');
  tMode.addEventListener('click',toggleTheaterMode);

  function toggleTheaterMode(e) {
    let tImg=document.querySelector('img#theater');
    console.log(e);
    if (!theaterMode) {
      theaterMode=true;
      calculateAndDisplay(.75);
      moveSlider(); // update scrubber position and size
      tImg.src='./images/contract.svg';
      document.body.style.background='#000000';
    }
    else {
      theaterMode=false;
      document.body.style.background='#FFFFFF';
      calculateAndDisplay(1.33);
      moveSlider();
      tImg.src='./images/expand.svg';
    }
  }

  //rate slider
  const rate=document.querySelector('input#rate');
  rate.addEventListener('change',rateAdjust);
  function rateAdjust(e) { video.playbackRate=e.target.value; }

  document.addEventListener('keydown',keyboardShortcuts);
  function keyboardShortcuts(e) {
    switch(e.keyCode){
      case 32: togglePlay(); break; //spacebar toggles play/pause
      default: break;
    }
  }
}
