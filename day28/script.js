window.onload=function() {
  let value=1;
  const minFactor = 0.5;
  const maxFactor = 4;
  const container=document.querySelector('div.container');
  const bar=document.querySelector('div.speed-control');
  const s=document.querySelector('span.s');
  container.addEventListener('mousemove',setTheControls);
  let steps=Math.floor(bar.scrollHeight/(maxFactor-minFactor))+1;

  function setTheControls(e){
    e.stopPropagation();
    if (e.target.className==='display') {return;}
    //console.log(e);
    let num=((e.offsetY/steps)+minFactor).toFixed(2);
    if ((num>=minFactor)&&(num<=maxFactor)) {
    bar.innerHTML=null;
    let num=((e.offsetY/steps)+minFactor).toFixed(2);
    document.querySelector('div.display').innerHTML=`${num}x`;
    bar.style.height=`${e.offsetY+20}px`;
    value=num;
    console.log(num);
  }
  }
}
