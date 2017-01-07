#Day TwentySeven of JS30
##CLICK AND DRAG
====

* It almost works. It's just jerky and draggy. Need to smooth out the movement.

* heh heh


//cache so we don't check every time: from html5rocks.com
let lastKnownXPos = 0;
let lastKnownYPos = 0;
let ticking = false;
function handleScroll(e) {
  lastKnownScrollPos=window.scrollY;
  if(!ticking) {
    window.requestAnimationFrame(function(){
      freeTheNav();
      ticking=false;
    });
  }
  ticking=true;
}
