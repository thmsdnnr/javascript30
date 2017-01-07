window.onload = function() {
  let navbar=document.querySelector('nav#main');
  const topOfNavbar = navbar.offsetTop;
  const bottomOfNavbar = navbar.offsetBottom;
  window.addEventListener('scroll',handleScroll);
  window.addEventListener('keydown',handleKey);
  function handleKey(e) { (e.keyCode===32) ? window.scrollBy(0, window.innerHeight) : 0; }

  //cache so we don't check every time: from html5rocks.com
  let lastKnownScrollPos = 0;
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

    let headP=document.querySelector('div.headMe');
    headP.addEventListener('blur',function(){
    headP.innerHTML+=`<img src="./lovecat.svg" class="loveCat" alt="a cat with love in its eyes" height="400" width="400">`;
  });

  function freeTheNav() {
    if (window.scrollY>=topOfNavbar) { //handle scroll down
      navbar.style.transform=`translateY(${(window.scrollY-topOfNavbar)}px)`;
    }
    else if (window.scrollY<topOfNavbar) {
      navbar.style.transform='';
    }
 }
}
