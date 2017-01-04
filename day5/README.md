#Day FIVE of JS30
##A FLEXBOX OF BEAUTY or "A POSITIVE EMOTION MACHINE"
====
<img src="http://i.imgur.com/3hyAx6f.png" alt="the emotion machine at work" />
**This is key!**

"There is a difference between $(this) and event.target, and quite a significant one. While this (or event.currentTarget, see below) always refers to the DOM element the listener was attached to, event.target is the actual DOM element that was clicked."

[http://stackoverflow.com/questions/12077859/difference-between-this-and-event-target](http://stackoverflow.com/questions/12077859/difference-between-this-and-event-target)

I spent a fair amount of time wondering why the *event* passed to my click handler didn't equal the same thing as `this.` in the context of my click handler function. Turns out that `this` returns the element that the click handler is attached to, not the *actual* DOM element clicked. This is important if you have e.g., nested elements, such as a <p> inside of a <div>. In my case, I had `<div><p>some text</p><p>more text</p><p>even more text</p></div>`, and so when I accessed e.target.classList I was getting the classList of the <p> tags and not of the div container as I thought

This was confusing, because with this code: ```
const panels = document.querySelectorAll('.panel');
panels.forEach(panel=>panel.addEventListener('click', toggleOpen));```
I believed that I was only attaching an event listener to the divs. I was, but event bubbling got the best of me. I was trying to do an if/then with `e.target.classList.contains('panel')` as a conditional and it just got messy.

I was also trying to implement the feature of only having one panel open at a time. I called this in my
`panels.forEach(p=>p.classList.remove('open-active'));` closeAllOpen() function that I called whenever a mouse click event triggeredd

### Enhancements

* Make more modular to accept more than 5 images

* Enable user to give a list of X images and some random words and generate a page

* More effects on image click e.g., background image change to clicked image, opacity, modal-style div, etc.
