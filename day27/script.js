window.onload=function () {

  let mouseHeld=false;

  let divs=document.querySelectorAll('div.item');
  let container=document.querySelector('div.container');

  //console.log(Array.from(divs).forEach((d)=>d.className));
  divs.forEach((d)=>d.addEventListener('mousedown',mouseDown));

  container.addEventListener('mousedown',mouseDown);
  container.addEventListener('mouseup',function(){mouseHeld=false;});
  container.addEventListener('mousemove',mouseMove);

  function mouseDown(e) {
    if (e.target.id==='itemContainer') {return; }
    e.stopPropagation();
    mouseHeld=true;
    console.log(e);
    console.log(e.target.className);
    let coords=e.target.getBoundingClientRect();
    //e.target.style.transform=`translate(${coords.left}px,${coords.top+coords.height}px)`;
    //let coords=e.target.getBoundingClientRect();
  }

  function mouseMove(e) {
    if (!mouseHeld) {return;}
    e.target.style.transform=`translate(${e.movementX}px,${e.movementY}px)`;
    console.log(e);
  }
  console.log(divs[0].className.split(" ")[1]); //divs[0].className.split(" ")[1]
}
