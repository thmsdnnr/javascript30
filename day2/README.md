#DAY Two of JS30
##CSS CLOCK
=======
[http://codepen.io/thmsdnnr/full/wgvrby/](http://codepen.io/thmsdnnr/full/wgvrby/) check it out!

The challenges with building this project were figuring out CSS positioning for the "lines" that make up the arms of the clock (heights becoming widths, widths becoming heights!), as well as figuring out how `transform-origin: 0 50%;` worked. It makes sense though: instead of rotating about the midpoint of the element, we want to rotate about the endpoint, so run that transform and then all subsequent transforms (like a `rotate(#DEG)` transform) will be with respect to this origin.

One tricky part was getting my animation for the seconds hand to not freak out when it reached the 0/60seconds mark. At this point, the amount of rotation I was feeding to the element goes from 270+360 degrees to 270 degrees, and the animation function was creating a huge jolt, since it was trying to animate the movement in a negative direction. To fix this, I created a "notransition" class (thanks StackOverflow) and applied it selectively to the second hand:

`//don't try to animate changing the degrees from 630 -> 270. it's ugly!
(seconds===0) ? secondHand.classList.add('notransition') : secondHand.classList.remove('notransition');`

It's maybe a little bit hackey, but it works fine.

###future enhancements:

*Is there a better way to address

*More dynamic sizing

*Options for the clock? Such as date, etc., other features

*Stopwatch version with a smoothly-flowing second hand rather than one that ticks every second with setInterval, perhaps using requestAnimationFrame for greater smoothness, closer to 60 fps.
