window.onload = function() {
  const video = document.querySelector('video.player');
  const playerContainer = document.querySelector('div.player');
  const controls = document.querySelector('div.controls');
  playerContainer.style.width=video.videoWidth;
  playerContainer.style.height=video.videoHeight;
  controls.style.width=video.videoWidth;

//seek back
  const seek=document.querySelector('input#seek');
  seek.style.width=`${video.videoWidth}px`;
  seek.max=video.videoWidth;
  seek.value=0;
  seek.addEventListener('change',scrubVideo);

  //console.dir(seek)

  function scrubVideo(e){
    //slider position by default is:
    //Math.round((video.currentTime/video.duration)*video.videoWidth);
    //so we can obtain the new video.currentTime simply by dividing e.target.value by videoWidth and multiplying by duration
    video.currentTime=(e.target.value/video.videoWidth)*video.duration;
    console.log(e);
  }

  function moveSlider() {
    let position=Math.round((video.currentTime/video.duration)*video.videoWidth);
    seek.value=position;
    console.log(seek.value);
    console.log(video.currentTime/video.duration);
  }

  window.setInterval(moveSlider,2000);

//play - pause
  let isPlaying=false;
  const playPause = document.querySelector('div#play');
  playPause.addEventListener('click',togglePlay);

  function togglePlay(){
    playPause.innerHTML=null;
    (isPlaying) ? playPause.innerHTML = `<img src="./play.svg">` : playPause.innerHTML = `<img src="./pause.svg">`;
    (isPlaying) ? video.pause() : video.play();
    isPlaying=!isPlaying;
  }

//skip forward
  const forward=document.querySelector('div#goForwards');
  forward.addEventListener('click',skip);
//skip backward
  const backward=document.querySelector('div#goBackwards');
  backward.addEventListener('click',skip);

  function skip(e,amount=10) {
    //console.log(e);
    let dir=0;
    (e.target.id==='f') ? dir=1 : dir=-1;
    let seekRange={start:video.seekable.start(0),end:video.seekable.end(0)};
    let newTime=video.currentTime+=(dir*amount);
    let isInRange = (newTime>seekRange.start)&&(newTime<seekRange.end);
    if (isInRange) { video.currentTime=newTime; }
    else { console.log('out of range'); console.log(video.currentTime);}
  }

//volume slider
  const volume=document.querySelector('input#volume');
  volume.addEventListener('change',volumeAdjust);
  function volumeAdjust(e) { video.volume=e.target.value; }

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
