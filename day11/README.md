#Day Eleven of JS30
##Custom HTML Video Player
====

It should be obvious, but attributes like MAX on an input are NOT style attributes. Ran into trouble when trying to set the maximum range for my input slider to input.style.max instead of input.max. My strategy for the slider was to create an input type of slider with the width of the video and a max-value of the width of the video. Then I scale the slider's position by the current fraction of the video completed, given by `(video.currentTime/video.duration)`.

It works! Was a little easier to implement than I thought it would be.

##BUGS:

* [ ] Play button disappears-jumps on first press
* [ ] Screen does a reflow while waiting for the video to be loaded. Wait to draw player until onReady event from the video or server.

##TO-DO:

* [ ] Improve CSS styling (flexbox or not?)

* [ ] Make more responsive (mobile?)

* [ ] Add duration of video at right

* [ ]Implement an "on-hover" so that the controls pop into the player from the bottom/top/left/right depending on where the hover happens and are scaled appropriately

<http://stackoverflow.com/questions/3463621/css-label-text-right-below-input-element>
