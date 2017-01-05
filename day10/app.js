window.onload = function() {
  const items = document.querySelectorAll('div.item');

  function clearChecks() { items.forEach(i=>i.children[0].checked=false); }

  function checkYourself() {
  const checked=(Array.from(items).filter((i)=>i.children[0].checked===true));
  //obtain the index of each of the checked items
  var indexes = checked.map(c=>Array.from(items).indexOf(c));
  //Then just iterate over the elements and set checked
  for (var i=indexes[0];i<indexes[1];i++)
  {
    //console.log(items[i].children[0].checked);
    items[i].children[0].checked=true;
  }
}

  //const checkBox = document.querySelectorAll('input[type=checkbox]');
  //console.log(checkBox);
  //window.alert('sup brah!');
  var shiftDown = false;
  var mostRecentCheckedIndex;

  function handleKeyDown(e){ if (e.keyCode===16) { shiftDown=true; } }
  function handleKeyUp(e){ if (e.keyCode===16) { shiftDown=false; } }
  function handleClick(e) {
    console.log(e);
    mostRecentCheckedIndex=Array.from(items).indexOf(e.target);
    console.log(mostRecentCheckedIndex);
    if (shiftDown) { checkYourself(); }
  }
  window.addEventListener('keydown',handleKeyDown);
  window.addEventListener('keyup',handleKeyUp);
  items.forEach(i=>addEventListener('click',handleClick));

  const clearBoxes=document.querySelector('#clearBoxes');
  clearBoxes.addEventListener('click',clearChecks);
}
