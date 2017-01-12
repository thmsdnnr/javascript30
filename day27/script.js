window.onload=function() {
  let mouseDown=false;
  let curXPos=0;

  let container=document.querySelector("div.items");
  let items=document.querySelectorAll("div.item");

  items.forEach((i)=>i.addEventListener('mousedown',handleClick));
  items.forEach((i)=>i.addEventListener('mouseup',handleClick));
  function handleClick(e) {
      (e.type==='mouseup') ? e.target.classList.remove('clicked') : 0;
      (e.type==='mousedown') ? e.target.classList.add('clicked') : 0;
    }

  container.addEventListener('mousemove',handleDrag);
  container.addEventListener('mousedown',()=>mouseDown=true);
  container.addEventListener('mouseup',()=>mouseDown=false);

  function handleDrag(e) { //negative X transform is to the right, + X transform is to the left
    let first=container.firstElementChild;
    let last=container.lastElementChild;
    let xMin=first.offsetLeft-first.scrollWidth;
    let xMax=last.offsetLeft-last.scrollWidth/2;
    let nextXCoord=curXPos-e.movementX;

    let inBounds = ((xMin<nextXCoord)&&(xMax>nextXCoord));

    if (inBounds&&mouseDown) {
      curXPos=nextXCoord;
      items.forEach((i)=>i.style.transform=`translateX(${-curXPos}px)`);
    }
  }
}
