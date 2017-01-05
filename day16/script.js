window.onload = function() {

  const textContainer = document.querySelector('div.container');
  textContainer.addEventListener('mousemove',handleMouse);
  const walk = 100;

  let contOffsetWidth=textContainer.offsetWidth;
  let contOffsetHeight=textContainer.offsetHeight;

  function handleMouse(e){
    let x = e.offsetX;
    let y = e.offsetY;
    if (this!==e.target) {
      x = x+e.target.offsetLeft;
      y = y+e.target.offsetTop;
    }
    const xPos = (x/contOffsetWidth*walk)-(walk/2);
    const yPos = (y/contOffsetWidth*walk)-(walk/2);

    var attr = xPos+'px '+yPos+'px 0 rgba(12,12,13,0.2),';
        attr+=xPos*-1+'px '+yPos+'px 0 rgba(14,12,13,0.2),';
        attr+=yPos+'px '+xPos*-1+'px 0 rgba(16,12,13,0.2),';
        attr+=yPos*-1+'px '+xPos+'px 0 rgba(12,18,13,0.2)';
    textContainer.style.textShadow = attr;
    console.log(x, y);
    console.log(contOffsetWidth, contOffsetHeight);
  }
}
