window.onload = function() {
  const addItems = document.querySelector('.add-items');
  addItems.addEventListener('submit',handleSubmit);
  const plates = document.querySelector('ul.plates');
  const wrap = document.querySelector('div.wrapper.announcement');

  displayTapas();
  inputFocus();

  function inputFocus() { //auto-focus on the input field
  document.querySelector('form.add-items input[type=text]').focus();
  }

  function displayTapas() {
    var tapas = JSON.parse(localStorage.getItem('tapaList'));
    if (tapas) {
      tapas.forEach(t=>{
      var liToMe = document.createElement('li');
      liToMe.setAttribute('class','tapa');
      liToMe.innerHTML=t;
      plates.appendChild(liToMe);
      });
    }
    else { plates.innerHTML = null; }
  }

  document.querySelector('#clearList').addEventListener('click',clearTapas);

  function clearTapas() {
    localStorage.removeItem('tapaList');
    displayTapas(); //delete displayed
    inputFocus();
  }

  function handleSubmit(e){
    const text = document.querySelector('form.add-items input[type=text]');
    var curTapas = JSON.parse(localStorage.getItem('tapaList'));
    if (curTapas) { curTapas.push(text.value); } //add the new tapa to the existing tapaList
    else { curTapas = [].concat(text.value); }
    localStorage.setItem('tapaList',JSON.stringify(curTapas));
  }
}
