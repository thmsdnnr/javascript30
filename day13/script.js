window.onload = function() {
  let images=document.querySelectorAll('img.slide-in');

  function handleScroll(e){
    console.count();
    images.forEach(i=>{

      const imageTop = i.y;
      const imageBottom = i.height+i.y;

      const windowTop = window.scrollY;
      const windowBottom = window.scrollY+window.innerHeight;

      //when windowBottom = imageTop+i.height/2 or slideInAt half image is at the bottom of the page exactly
      const slideInAt = imageTop+i.height/2;
      const isVisible = ((windowTop<=imageBottom)&&(windowBottom>=imageTop));

      if ((windowBottom>=slideInAt)&&(windowTop<=slideInAt)) { //make appear:
        (!i.classList.contains('active')) ? i.classList.add('active') : 0; }
      if (!isVisible) { //make disappear:
        i.classList.remove('active'); }
    });
  }

window.addEventListener('scroll',handleScroll));
}
