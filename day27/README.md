#Day TwentySeven of JS30
##CLICK AND DRAG
====

* Pretty easy to do. At first it was janky because I was trying to calculate an absolute measure assuming that all the boxes were the same width. This is dumb! You can simply select the container with all the items as the whole and grab the first and last element with firstElementChild and lastElementChild methods, and then you can obtain the absolute offset with offSetLeft, as well as the size of the elements themselves with scrollWidth. This made the meat of the code pretty tidy:

```javascript
function handleDrag(e) { //negative X transform is to the right, + X transform is to the left
  let first=container.firstElementChild;
  let last=container.lastElementChild;
  let xMin=first.offsetLeft-first.scrollWidth;
  let xMax=last.offsetLeft-last.scrollWidth/2;
  let nextXCoord=curXPos-e.movementX;

  let inBounds = ((xMin<nextXCoord)&&(xMax>nextXCoord));

  if (inBounds&&mouseDown) {
    curXPos=nextXCoord;
    items.forEach((i)=>i.style.transform=`translateX(${-curXPos}px)`);
  }
}
```

* I'm embarrassed to note that I spent a little time trying to figure out why a `(min < x < max)` comparison didn't work (have to do `(min<x)&&(x<max)` instead. Apparently `true < max` is true for any value of max besides false (heh), and so if x is greater than the min, the max check never happens. So chaining comparisons like this is a *bad* idea. I mean, it not only doesn't work at all, but it "works" just enough that it seems like maybe the problem is somewhere else in the code. SIGH SIGH SIGH.

##TODOs/fun ENHANCEMENTS

[ ] populate each element with random pictures from IMGUR or whatever and make it look tumblrish with flexbox
[ ]
