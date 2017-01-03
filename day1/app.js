//document.getElementById('keys').
window.onload = function() {
window.addEventListener("keydown", playSound);

var keys = document.getElementsByClassName('key');
var sounds = document.getElementsByClassName('sounds');

var keyMap = {};
var soundMap = {};

for (var i=0;i<keys.length;i++) {
  keyMap[(keys[i].dataset.key)] = i;
  soundMap[(sounds[i].dataset.key)] = i;
  keys[i].addEventListener('transitionend', removeTransition);
}
//keyMap is an object with key: KEYCODE VALUE value: INDEX IN ELEMENTS ARRAY
function playSound(e) {
  if(keyMap[e.keyCode]!==undefined) //e.keyCode is the KEY for keyMap that equals to the
  {
    var audio=(sounds[soundMap[e.keyCode]]);
    (keys[keyMap[e.keyCode]]).classList.add('key-active'); //className+=" key-active"; //index in the keys array of the element
    audio.currentTime=0
    audio.play();//play sound
    /*setTimeout(function()
    {
      (keys[keyMap[e.keyCode]]).classList.remove('key-active');//.className="key";
    },50);*/
  }
}

function removeTransition(e) {
  if (e.propertyName!== 'transform') { return; }
  e.target.classList.remove('key-active');
}
}
