window.onload=function() {
  let catsClicked=0;

  setInterval(randomCat,1000); //kick off the loop

  let cats = document.querySelectorAll('div.container img');
  cats.forEach((cat)=>{cat.style.display='none';});
  const score=document.querySelector('div.scoreboard');

   function isValid(x,y) { //each cat is 200x200
     let validX = ((200<x)&&(x<window.innerWidth-200));
     let validY = ((200<y)&&(y<window.innerHeight-300));
     return (validX&&validY);
   }

  function randomCat() {
    cats.forEach((cat)=>{
      let randBool=Math.round(Math.random()*1);
      let randX=Math.round(Math.random()*(window.innerWidth/2))+200;
      let randY=Math.round(Math.random()*(window.innerHeight/2))+100;
      if (!isValid(randX,randY)) {randX=window.innerWidth/200; randY=window.innerHeight/200;}
      if (randBool) {
        cat.style.display='';
        cat.style.left=`${randX}px`;
        cat.style.top=`${randY}px`;
        cat.addEventListener('click',handleCatClicks,false);
      }
      else{ cat.style.display='none'; }
    });
  }

    function handleCatClicks(e) {
      randomMeow();
      e.target.style.display='none';
      catsClicked++;
      updateHeart();
      score.innerHTML=`${Array(catsClicked).join('♥')}`;
    }

    //meow audio
    const meows=document.querySelectorAll('audio');
    function randomMeow() {
      clearMeows();
      let maxI=meows.length-1;
      let randomMeow=Math.floor(Math.random()*maxI);
      let audio=meows[randomMeow];
      audio.playbackRate=2;
      audio.currentTime=10;
      audio.play();
    }

    function clearMeows() { meows.forEach((m)=>m.pause()); }

    //throbbing heart display
    const heart=document.querySelector('div.heart');
    var message=["Just","so","you","know,","the","game","never","really","ends.","It's","a","little","bit","like","life","in","this","way.",
    "You","can","keep","clicking","on","these","cats,","and","keep","making","hearts","pop","up,","and","you","can","keep","loving","it,",
    "and", "the","cats","will","keep","loving","it,","and","you","can","come","back","to","this","page","any","time","you","need","to","relax",
    "or","enjoy","yourself."];
    let mIndex=0;
    function updateHeart() {
      if (catsClicked<30){
        heart.innerHTML=null;
        heart.innerHTML=`${Array(catsClicked).join('♥')}`;
        heart.style.fontSize=`${Math.min(catsClicked*4,64)}px`;
      }
      else {
      heart.style.fontSize=`40px`;
      heart.style.fontFamily=`Helvetica Neue`;
      heart.innerHTML=null;
      if (mIndex<message.length) {
        heart.innerHTML
        heart.innerHTML+=`${message[mIndex]}`;
      }
      mIndex++;
    }
    if(mIndex>65) {
      heart.innerHTML=`Wow, you really love cats. Cool.`;
    }
  }
}
