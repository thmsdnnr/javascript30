#Day Thirteen of JS30
##Slide In On Scroll Effect
====

The struggle here is determining the dimensions. window.innerHeight vs window.scrollY, etc. Here's some info.

* innerHeight and innerWidth do NOT include toolbars and scrollbars, while outerHeight and outerWidth DO.
* window.scrollY = number of pixels scrolled from the UPPER LEFT CORNER.

So the bottom of the window is scrollY+innerHeight
When the bottom of the window - image.height/2 >= image.height, or we're "halfway down" into an image, we bounce the image in.
When the bottom of the window is >= image.yPosition+image.height, or we're all the way past the image, we make it disappear

After some math frustrations I came up with the following. I then added a debouncing handler from underscore.js to reduce the number of calls to handleScroll() from the mousemove listener.

```javascript
//from underscore.js https://davidwalsh.name/function-debounce
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```

Surprisingly, calling the debouncer in the handler `window.addEventListener('scroll',debounce(handleScroll,10,true));` led to maybe 2-3x the number of function calls than letting the window event listener call handleScroll on its own. I could increase the wait time for the debounce function, but doing so didn't give me any benefit in the # of function calls and it produced visual detriment on the image pop-in animations.

### The moral to the story is debouncing is not always needed and sometimes can have worse performance for a given visual effect, I suppose.

```javascript
function handleScroll(e){
  images.forEach(i=>{

    const imageTop = i.y;
    const imageBottom = i.height+i.y;

    const windowTop = window.scrollY;
    const windowBottom = window.scrollY+window.innerHeight;

    //when windowBottom = imageTop+i.height/2 or slideInAt half image is at the bottom of the page exactly
    const slideInAt = imageTop+i.height/2;
    const isVisible = ((windowTop<=imageBottom)&&(windowBottom>=imageTop));

    if ((windowBottom>=slideInAt)&&(windowTop<=slideInAt)) { //make appear:
      (!i.classList.contains('active')) ? i.classList.add('active') : 0; }
    if (!isVisible) { //make disappear:
      i.classList.remove('active'); }
  });
}
```

* Images from unsplash.it
