#Day One of JS30
##Drum Machine using Flexbox and Sweet 808 Samples

I was used to using jQuery and wrapping everything in a $(document).ready(function(){}); without thinking, so I was rather confused at first when `var keys = document.getElementsByClassName('key');` returned undefined. I had to wrap my code in window.onload = function() { } instead.

Another challenge was adding and removing class names dynamically on a keypress. I console.log()'d my keypress event to find className and decided initially to do a `className+= " key-active";`. Later after looking at the solution's code, I found a rather more efficient way: (`classList.add('[CLASS TO ADD]')` and `classList.remove('[CLASS TO REMOVE]')`. The downside to my initial approach was that it's not very extensible. To remove a class, I had to set className back to the original name which means I'd either have to save off a copy of the class name prior to modifying it to restore it later or I'd have to know at any given point in a program what classes the element should have, which is *really* difficult when you have lots of classes.

The solution code uses `const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);` to grab the audio and key elements on a keypress event. My approach is similar, but instead I created keyMap and soundMap objects to map the event.keyCode value to the index of the selector for the corresponding <audio> and <div> key tag in the keys and sounds arrays generated in my `document.getElementsByClassName()` calls. Again, my method took a bit more code but still worked.

One part I didn't think to include at all in my code and only did after reading the solution:

Setting `audio.currentTime=0` prior to calling `audio.play()`. This is key for playing anything fast because it retriggers the audio file to play again from zero, meaning you don't have to wait for the entire clip to play before you can play it again.

Finally, the solution uses a removeTransition event handler to call classList.remove(). This is much more efficient. I knew that I needed to remove the class after it was no longer active, but I was calling a setTimeout:

`setTimeout(function()
{
  (keys[keyMap[e.keyCode]]).classList.remove('key-active');//.className="key";
},50);`

This worked, but it was messy, as it is clogging up the event loop with unnecessary calls. It's also sloppy, because I'm depending on setTimeout to fire every 50ms exactly with no jitter (ha ha!), which never happens, so there's always going to be some decoupling between my `transition: 50ms` in CSS and my 50ms setTimeout interval.

I didn't know about the 'transitionend' event. An event gets created for each property name in my CSS div.key-active class being transformed, so in this case, these events are fired:

"TransitionEvent {isTrusted: true, propertyName: "transform", elapsedTime: 0.05, pseudoElement: "", type:
"transitionend"…}bubbles: truecancelBubble: falsecancelable: truecomposed: falsecurrentTarget: nulldefaultPrevented:
falseelapsedTime: 0.05eventPhase: 0isTrusted: truepath: Array[6]propertyName: "transform"pseudoElement: ""returnValue:
truesrcElement: div.keytarget: div.keytimeStamp: 11133.53type: "transitionend"__proto__: TransitionEvent app.js:32"

"TransitionEvent {isTrusted: true, propertyName: "box-shadow", elapsedTime: 0.05, pseudoElement: "", type: "transitionend"...}"

corresponding to these lines of CSS:

`div.key-active {
  transform: scale(1.1);
  box-shadow: 0 0 0 4px orange;
  transition: 50ms
}`

Since the event already existed, it makes much more sense to do something like this:

`if (e.propertyName!== 'transform') { return; }
  e.target.classList.remove('key-active');`

We wait until the transform is complete and then remove key-active. The other advantage to doing this rather than a setInterval is that setInterval times can be notoriously jittery, and the page is not going to be as snappy as you'd expect a drum machine to be if the times aren't precise.

*I grabbed some sweet 808 drum sounds from [http://soundpacks.com/free-sound-packs/808-drum-kit/](http://soundpacks.com/free-sound-packs/808-drum-kit/)

###Potential Enhancements:

*Ability to load different sets of drum sounds (808, 909, etc.)

*Ability to change drum sounds for each instrument on the fly (new kick, new snare, etc.)

*Ability to program patterns like a step sequencer (would be more another project really though than an enhancement!!)
