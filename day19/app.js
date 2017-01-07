window.onload = function() {
setTheControls();

  let paused = false;

  let width;
  let height;
  //effects flags
  let splitScreen = false;
  let chroma = true;
  let rMult = 1;
  let gMult = 1;
  let bMult = 1;

  let sat = 1;
  let satChange = false;

  let brightness = 0;
  let contrast = 1;

  let photos = document.querySelector('div.photoGrid');
  let camCanvas = document.querySelector('#camCanvas');
  let video = document.querySelector('#video');
  const ctx=camCanvas.getContext('2d');

  const constraints = {audio: false, video: {
    width: { min:320, ideal: 320, max: 900 },
    height: { min: 240, ideal: 240, max:600 }
  }};

  var promiseV=navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(err => {console.error(`OH NO!!!`, err);});

   video.onloadedmetadata = function(e) {
     width=e.target.videoWidth;
     height=e.target.videoHeight;
     window.requestAnimationFrame(paintToCanvas); // call the loop
  };

  function handleSuccess(stream) { video.src = window.URL.createObjectURL(stream); }

//this function loops
  function paintToCanvas() {
  if(!paused) {
    defaultDraw();
    if (splitScreen==true) { splitTheScreen(); }
    if (chroma===true) { chromaKey(); }
  }
  window.requestAnimationFrame(paintToCanvas);
  }

  function defaultDraw() {
    camCanvas.width=320;
    camCanvas.height=240;
    ctx.scale(0.5,0.5);
    ctx.drawImage(video,0,0,width,height);
  }

  function splitTheScreen() { //effect: choose a number and split up into a ton of groups
  //  defaultDraw(); //draw the background
    //vGrid
      ctx.scale(0.5,0.5);
      ctx.globalAlpha=0.4;
      ctx.drawImage(video,0,0,width,height); //upper-left
      ctx.drawImage(video,width,0,width,height); //upper-right
      ctx.drawImage(video,0,height,width,height); //bottom-left
      ctx.drawImage(video,width,height,width,height); //bottom-right
  }

  function chromaKey() {
    var frame = ctx.getImageData(0, 0, width, height);
    let d=frame.data;
    for (let i=0;i<frame.data.length;i+=4) //Uint8 Clamped Array numbers between 0 and 255 RGBA
    {
      d[i] = Math.min(d[i]*rMult,255); //r
      d[i+1] = Math.min(d[i+1]*gMult,255); //g
      d[i+2] = Math.min(d[i+2]*bMult,255); //b

      d[i] = changeSaturation(d[i],d[i+1],d[i+2],sat)[0];
      d[i+1] = changeSaturation(d[i],d[i+1],d[i+2],sat)[1];
      d[i+2] = changeSaturation(d[i],d[i+1],d[i+2],sat)[2];

      d[i] = brightContrast(d[i],d[i+1],d[i+2])[0];
      d[i+1] = brightContrast(d[i],d[i+1],d[i+2])[1];
      d[i+2] = brightContrast(d[i],d[i+1],d[i+2])[2];
    }
    ctx.putImageData(frame,0,0); // typically you'd get a new context
  }

  function frame2Image() { //grab current canvas frame and create a png
    var img = new Image();
    img.src=camCanvas.toDataURL('image/png');
    var d = document.createElement('div');
    d.className="img-snap";
    d.innerHTML=`<a href="${img.src}" target="_new"><img src="${img.src}" alt="pretty photo booth picture"
    height="${img.height/2}" width="${img.width/2}"></a>`;
    photos.appendChild(d); //insertBefore instead of appendChild for the snaps
  }

  function setTheControls() { //for the heart of the sun
    //take a picture
      const snapShot = document.querySelector('img.camera');
      snapShot.addEventListener('click',frame2Image);
    //split screen -> 4 PIPs
      const splitFour = document.querySelector('img.splitFour');
      splitFour.addEventListener('click',function(){
        splitScreen=!splitScreen;
        console.log(splitScreen);
      });
    //pause button -> pause video
      document.querySelector('button.pause').addEventListener('click',(e)=>{
        paused=!paused;
        let text=e.target.innerHTML;
        (text==="PAUSE") ? e.target.innerHTML="PLAY" : 0;
        (text==="PLAY") ? e.target.innerHTML="PAUSE" : 0;
      });
  //Sliders to tweak image chracteristics
    // RGB
      document.querySelector('input#red').addEventListener('change',handleColorSlider);
      document.querySelector('input#green').addEventListener('change',handleColorSlider);
      document.querySelector('input#blue').addEventListener('change',handleColorSlider);
    // Saturation & misc.
    document.querySelector('input#saturation').addEventListener('change',handleColorSlider);
    document.querySelector('input#brightness').addEventListener('change',handleColorSlider);
    document.querySelector('input#contrast').addEventListener('change',handleColorSlider);
  }

  function handleColorSlider(e) {
    console.log(e.target.value);
    switch(e.target.id){ //e.target.value is a multiplier between 1.0 and 2.0 inclusive
      case "red": rMult=e.target.value; break;
      case "green": gMult=e.target.value; break;
      case "blue": bMult=e.target.value; break;
      case "saturation": sat=e.target.value; satChange=true; break;
      case "brightness": brightness=e.target.value; break;
      case "contrast": contrast=e.target.value; break;
    }
    defaultDraw();
    chromaKey();
  }

  // CREDIT: http://alienryderflex.com/saturation.html (public-domain function)
  //  The "change" parameter works like this:
  //    0.0 creates a black-and-white image.
  //    0.5 reduces the color saturation by half.
  //    1.0 causes no change.
  //    2.0 doubles the color saturation.
  //  Note:  A "change" value greater than 1.0 may project your RGB values
  //  beyond their normal range, in which case you probably should truncate
  //  them to the desired range before trying to use them in an image.

  function changeSaturation(R,G,B,change=1) {
    const pR=.299;
    const pG=.587;
    const pB=.114;
    let P=Math.sqrt(((R*R)*pR)+((G*G)*pG)+((B*B)+pB));
    R=P+(R-P)*change;
    G=P+(G-P)*change;
    B=P+(B-P)*change;
    return [R,G,B];
    }

  function brightContrast(R,G,B) {
    //const c=1/(1+Math.exp(-contrast));
    R = clampTo(Math.round(128+(contrast*(R-128)+brightness*8)));
    G = clampTo(Math.round(128+(contrast*(G-128)+brightness*8)));
    B = clampTo(Math.round(128+(contrast*(B-128)+brightness*8)));
    //R = clampTo(R+(R*change));
    //G = clampTo(G+(G*change));
    //B = clampTo(B+(B*change));
    return [R,G,B];
  }

//clamps a given value to a supplied range [MIN,MAX], inclusive
//defaults to 0, 255 for use with RGB
  function clampTo(value,low=0,high=255) {
    if (typeof(value)!=="number") { console.error('Argument must be a number'); return false; }
    if (low>high) { console.error('Range must be given in format LOW -> HIGH w/2 arguments'); return false; }
    (value>high) ? value=high : value;
    (value<low) ? value=low : value;
    return value;
  }
}
