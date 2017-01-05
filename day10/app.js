window.onload = function() {
  const inputs = document.querySelectorAll('div.item input');
  var shiftDown = false;
  var lastCheckedIndex;
  var nextToLastCheckedIndex;
  var lastUncheckedIndex;
  var nextToLastUncheckedIndex;
  styleParentDivs();

  inputs[0].parentNode.classList.add('ohey');
  console.dir(inputs[0].parentNode.classList);

  function returnLowToHigh(a,b) {
    var c;
    if (a>b) { c=a; a=b; b=c; }
    return [a,b];
  }

  function styleParentDivs() { //and style those divs!
    inputs.forEach(i=>(i.checked) ? i.parentNode.classList.add('darken') : i.parentNode.classList.remove('darken'));
  }

  function checkYourself(a,b,flag) { //before you...
    var indices = returnLowToHigh(a,b);
    console.log("indices: "+indices+"flag: "+flag);
    for (var i=indices[0];i<indices[1];i++) { inputs[i].checked=flag; }//GOTTA CHECK EM ALL!
  }

  //clear all checked boxes button
  document.querySelector('#clearBoxes').addEventListener('click',clearChecks);
  function clearChecks() { inputs.forEach(i=>i.checked=false); styleParentDivs(); }

  //event listeners for shift key and checkbox clickage
  window.addEventListener('keydown',handleKeyDown);
  window.addEventListener('keyup',handleKeyUp);
  function handleKeyDown(e){ if (e.keyCode===16) { shiftDown=true; } }
  function handleKeyUp(e){ if (e.keyCode===16) { shiftDown=false; } }

  inputs.forEach(i=>addEventListener('click',wreckYourself));
  function wreckYourself(e) { //sorry, I had to.
    console.log(e.target.checked); //true or false
    if (e.target.type!=="checkbox") { return ; } // don't care about yr clicks brah
    if (e.target.checked===true) {
      nextToLastCheckedIndex=lastCheckedIndex;
      lastCheckedIndex=Array.from(inputs).indexOf(e.target);
      if (shiftDown) { checkYourself(nextToLastCheckedIndex,lastCheckedIndex,true); styleParentDivs(); }
    }
    if (e.target.checked===false) {
      nextTolastUncheckedIndex=lastUncheckedIndex;
      lastUncheckedIndex=Array.from(inputs).indexOf(e.target);
      console.log(nextTolastUncheckedIndex+" "+"last: "+lastUncheckedIndex);
      if (shiftDown) { checkYourself(nextTolastUncheckedIndex,lastUncheckedIndex,false); styleParentDivs(); }
    }
  }
}
