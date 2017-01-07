#Day Twentyfour of JS30
##Sticky Nav
====

First steps toward a sweet looking navbar.

I could certainly add some more cat animations but I'm good for now.

I wrote some truly horrifying code for the lulz.

```javascript
function shakeIt(){
  let lastPos;
  let scrollDir = 1;
  var wInning = window.setInterval(function()
  {
    lastPos=window.scrollY;
    (lastPos===window.scrollY) ? scrollDir*=-1 : 0;
    window.scrollBy(scrollDir, scrollDir);
  },25);
}
```

I also wrote some slightly useful code:

```javascript
function hexToRGB(hex) {
  //is it of the proper nature to convert?
  if ((hex.length===7)&&(hex[0]==='#')) { hex=hex.slice(1); }
  console.assert((hex.length===6),'must have six things');
  console.log("invalid"+hex.match(/^[A-F]^[0-9]/gi));
  console.assert((!hex.match(/[^A-F0-9]/i)),'invalid hexadecimal characters');
  const hexNum = {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,
  "A":10,"B":11,"C":12,"D":13,"E":14,"F":15};
  let cArr=hex.split("").map(c=>hexNum[c]);
  //calculate numbers
  let R = 16*cArr[0]+cArr[1];
  let G = 16*cArr[2]+cArr[3];
  let B = 16*cArr[4]+cArr[5];
  console.log(`rgb(${R},${G},${B})`);
}
```
