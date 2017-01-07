#Day TwentyFive of JS30
##Learning about addEventListener
====

Cmd-C -> Cmd-P "forked" index.html for this lesson.

```javascript
<div class="one">
  <div class="two">
    <div class="three">
    </div>
  </div>
</div>
```

With nested divs, the click event "bubbles" to the top. That is to say, with a click handler on one, two, and three, clicking on three will call the click handler function for three, two, and one. *BUBBLES*.

You don't always see these clicks but that's b/c you aren't usually listening for them.

What are the steps?

1. When you click on an element, the browser does a "Capture" > goes from the top down into the nest of elements to the heart.
2. Then when it reaches the innermost part it does a bubble. First Capture. Then Bubble.
3. Events are triggered on the *BUBBLE UP*, not on the capture.

Can add a third flag to addEventListener. E.g.: `divs.forEach((div)=>div.addEventListener('click',handleClick,{capture:true}));`. This will fire events on CAPTURE (so return one, then two, then three). **Default is bubble**.

You can prevent bubbling by calling e.stopPropagation();. If you use stopPropagation with capture=true, you only get the outermost element (in this case, one) no matter which element you click on. If you use stopPropagation with capture=false, you only get the element you click on (one, two, or three).

There's also an option called .once(). Once listens, grabs an event, and then unbinds itself. Short for calling removeeventlistener('click'). just call {once:true} in the third param of addEventListener. So this means your clicks will bubble to whichever eventlistener *hasn't been clicked yet*.

## Use cases for once?

* E.g., store checkout, form submit, only want to allow the user to click ONCE. EPONYMOUS!

*

###Follow-ups

*

*
