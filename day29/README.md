Day TwentyNine of JS30
##Countdown Timer
====

* Time time ticking ticking

* Can add the option to save and delete common timers and store them in local storage as a JSON stringified data element.

##Features/add-ons

```javascript
d.innerHTML+=`<label for "name">GIVE IT A NAME to Save It!</label><input type="text" class="name" title="Enter a name to save your timer"><input type="submit" value="submit"></form>`;
```

```javascript
const form=document.querySelector('form#custom');
const custom=document.querySelector('div.custom');
const name=document.querySelector('input.name');
custom.addEventListener('keydown',customTimer);
name.addEventListener('keydown',customTimer);

form.addEventListener('submit',formHandle);

function formHandle(e){
//  e.preventDefault();
  console.log(e);
}
```
