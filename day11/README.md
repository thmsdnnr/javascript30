#Day Eleven of JS30
##Custom HTML Video Player
====

##ENHANCEMENTS:

* Tool-tips for select control bar items
* "Stats for nerds" div with video statistics modal
* Click-and-drag bottom left or bottom right corner to expand div with preserved aspect ratio

"Slider Preview Image" [ ]
  1. Get currently pixel position of slider
  2. Pop up modal with current time in bottom and frame from video at current time
  3. While mousedown and drag event, update pixel position of modal, update current time dragged to in bottom, update frame from video
  4. On release, kill modal and scrub to that time

"Theater mode": [X]
  ENTER THEATER MODE:
  1. Upscale video height and width by +1.33x
  2. Expand div container width to 100% and change background color to black
  3. Update control height/width as well (wrap in a function), incl. auto-hide dimensions
  EXIT THEATER MODE:
  1. Downscale video height and width by +0.75x
  2. Contract div container width to original and restore original background color
  3. Update control height/width as well, incl. auto-hide dimensions

####NOTES
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
