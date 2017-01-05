window.onload = function() {
window.addEventListener('keydown',handleKeys);
  function handleKeys(e) {
    if (keyArr.length<10) {keyArr.push(e.keyCode);}
    if (keyArr.length===10) { konamiCheck(keyArr);}
    }

  var keyArr = [];
  const encourage=document.querySelector('div.encourage');

  function konamiCheck(arr) {
    //key sequence: ↑↑↓↓←→←→BA
    // 38 38 40 40 37 39 37 39 66 65
    const konami=[38,38,40,40,37,39,37,39,66,65];
    for (var i=0;i<arr.length;i++) {
      if(arr[i]!==konami[i]) {
        keyArr=[];
        encourage.innerHTML="NOT QUITE. TRY AGAIN."
        setTimeout(function(){encourage.innerHTML=null; keyArr=[];},2000);
        return false;
      }
    }
    cornify_add();
}
}
