window.onload = function() {

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key=>key.addEventListener('transitionend', removeTransition));
  window.addEventListener("keydown", playSound);

  function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!key) { return; }
    key.classList.add('key-active');
    audio.currentTime=0
    audio.play();
  }

  function removeTransition(e) {
    return (e.propertyName==='transform') ? e.target.classList.remove('key-active') : null;
  }
}
