window.onload = function() {
function randomPhrase(numWords){
  var randomWords = ['THIS','IS','NATURE','EAT','PRAY','LOVE','WATER',
  'YOU','HEART','HAPPY','BEST','YEAR','VALUE',
  'ESTEEM','SACRED','INTIMACY','HUG','BEAUTY',
  'TAKE','TIME','YOURS','JOY','OPEN','MONEY',
'LOTUS','BUDDHA','DHARMA'];

  var rPhrase=[];
  const randomL=randomWords.length;
  for (var i=0;i<numWords;i++){
      rPhrase.push(randomWords[Math.floor(Math.random()*randomL)]);
  }
  return rPhrase;
}

//draw 5 panels
const dP = document.querySelector('div.panels');
for (var i=1;i<=7;i++) {
  var rWords=randomPhrase(3);
  var div = document.createElement('div');
  div.style.backgroundImage = "url('./images/bg"+i+".jpg')";
  div.style.backgroundSize = "cover";
  div.classList.add('panel');
  div.classList.add('panel'+i);
  div.id="panel"+i;
  div.innerHTML = "<p>"+rWords[0]+"</p><p>"+rWords[1]+"</p><p>"+rWords[2]+"</p>";
  dP.appendChild(div);
}

//event listeners and event handling
const panels = document.querySelectorAll('.panel');
panels.forEach(panel=>panel.addEventListener('click', toggleOpen));
panels.forEach(panel=>panel.addEventListener('transitionend', toggleActive));

function closeAllOpen() {
  panels.forEach(p=>p.classList.remove('open'));
  }

function toggleOpen(e){
  document.body.style.backgroundImage = this.style.backgroundImage;
  document.body.style.backgroundSize = "contain";
  //console.log();
  closeAllOpen();
  this.classList.toggle('open');
}
function toggleActive(e){
  console.log(e.propertyName);
  (e.propertyName==="flex-grow") ? this.classList.toggle('open-active') : 0; }
}
