#Day Fifteen of JS30
##LocalStorage and Event Delegation
====

Form submit reloads the page. So we either have to preventDefault and/or store each tapa in localstorage and load it and display it with each page load! This isn't AJAX, folks :(.

Using `Array.from(string)` to build my initial tapa array if it didn't already exist resulted in unexpected results: I got e.g., for "taco" four tapas, named "t", "a", "c", and "o". So I used `[].concat(string)` instead to build out my initial array. Heh.

"New users should note that the capitalization of 'Id' in the name of this method must be correct for the code to function; "getElementByID" does not work, however natural it may seem." heh.
[https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

I added a sweet fish animation.

And whoa, Digital Color Meter in OSX!!

I decided not to take this approach.

```javascript
function submitForm() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET","./index.html",true);
  var tapa = document.getElementById('tapa').value;
  xhr.send(tapa);
  xhr.onload = function(){
    var liToMe = document.createElement('li');
    liToMe.innerHTML=tapa;
    plates.appendChild(liToMe);
  }
}
```

Also left out:

```javascript
else {
  plates.innerHTML=null;
  var pM = document.createElement('p');
  pM.innerHTML="Add Some Tasty Tapas!";
  wrap.appendChild(pM);
}
}
```

Cleaner look without the "add some tapas" text IMO.

* python -m SimpleHTTPServer in active directory then http://localhost:8000 to see stuff in realtime with form submits and AJAX. Handy.
