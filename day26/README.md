#Day Twentysix of JS30
##Stripe inspired Navbar
====

One tricky part of this figuring out how to make the nav feel responsive. I didn't want it to disappear when you moused over the tool tip, and I wanted the transition to be smoothed out when you hovered from link to link, but I also didn't want it to hang around forever. I put a flag on toolTipMouseOver as well as navBarMousesOver and then call a setTimeout on my mouseleave listeners wait a few hundred ms, and then check these flags. My mouseon listeners reset the flags as appropriate. While maybe not the most elegant solution, it certainly works and the UI feels nice. I'm not sure [ ] TODO? if there's as better way of doing this or not. Pure CSS? Prettier JS?

Another tricky part was THE almighty divot:

```css
div.navbox::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 25%;
  margin-top: -7.5px;
  width: 10px;
  height: 10px;
  border-left: 2px solid gold;
  border-top: 2px solid gold;
  opacity: 1;
  background-color: rgba(255,255,255,0.9);
  transform: rotate(45deg);
}
```

Explanation: the left/top border combo here creates a *vertical* white arrow. The values given for weight and color of the borders should match those of the container that they're in (in my case, the rest of the div tooltip has border 2px solid gold) to make a continuous-looing effect.

*Basically what the code does is:*

0. using the css ::after pseudo-class:
1. creates a square div
2. positions it absolutely along the border the tooltip div using top/left/bottom/right (in this case, top/left). Positions it within the tooltip (so it sticks out) with a negative `margin-[SIDE THE ARROW IS ON]` property that's equal to roughly 75% of the div width/height. To be specific, it should be equal to div (side-length/2) * sqrt(2), so in this case 5*sqrt(2) which is 7.07.
3. rotates it by 45 degrees so it's "pointy"
4. Gives it the same background color as the enclosing div. Boom!

Only potential drawbacks of this implementation: can't have different color "arrow" than the bg color of the div, because there's still half a box hanging around. It's handy though in that it's pure CSS, no images involved.

```javascript
function magicNavigation(e) {
  console.log(e);
  e.stopPropagation();
  visible=true;
  if(e.target.id==="") { return; } //NOT THE EVENTS YR LOOKING 4
  d.innerHTML=null;
  d.classList.remove('invisible');
  let coords=e.target.getBoundingClientRect();
  d.style.top=`${coords.height+50}px`;
  d.style.left=`${coords.right-coords.width}px`;
  d.style.width=`${coords.width*2}px`;
  populateNav(e,coords);
}
```

Obviously to extend this to left/right/bottom divot you just change the borders displayed as well as the absolute positioning and also the top-left-bottom-right values.

###TODO: ^ make a table or something for this.

Divots inspired/extended by this (http://www.cssportal.com/css-tooltip-generator/)[http://www.cssportal.com/css-tooltip-generator/]. This makes the "Stems" or the "Divots" that you see on the top/right/left/bottom of tooltips. Basically what it does is:

1. Create a div of zero dimensions and append it with absolute positioning to the tooltip div that appears selectively on mouse hover.
2. Set a negative margin so it projects from the side of the box.
3. Use border-left/right/top/bottom to make an "all border" div appear.


###Stuff I always forget:

* `d.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;` the PX ON THE TRANSLATE!
* flex-flow: row wrap;
[X] Something's wrong with the kill-hover but we're getting there.

###TODO:

[X] Make .invisible a container using flexbox and the children use flex
[X] More programmatic div assemblage and insert into div.invisible as child
[X] Prettier "divot" at top of navbar
[X] Slightly more responsive?
[ ] extend tooltip code, maybe make a "generate a tooltip" page in JS to practice displaying raw code / manipulating vars
[ ] fix up a few of the "Magic numbers" like in the aptly named magicNavigation() function:
