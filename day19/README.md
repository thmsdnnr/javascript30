#Day Nineteen of JS30
##A Javascript Photo Booth-type App
====

# FINDINGS:
## IF you stare at RGBA too long your brain starts to spell GARBAGE.
### Garbage: ORIGIN late Middle English (in the sense ‘offal’): from Anglo-Norman French, of unknown ultimate origin.
#### from OFFAL: ORIGIN late Middle English (in the sense ‘refuse from a process’): probably suggested by Middle Dutch afval, from af ‘off’ + vallen ‘to fall.’
STRATEGY:

`ctx.globalAlpha = 0.4;` sets the transparency for the context (set before drawing). Makes the picture-in-picture easy.

###TODO:

(http://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid)[http://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid]

(http://www.foundalis.com/res/imgproc.htm)[http://www.foundalis.com/res/imgproc.htm]

(https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas]

Reverse the order of image display in the photoroll
Add sweet camera button

Got some chromakey help from this sweet tutorial:
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas#Manipulating_the_video_frame_data](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas#Manipulating_the_video_frame_data)

* "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of [0,255], 0 or 255 will be set instead.""

* "Clamped" array means don't have to check endpoints necessarily tho you'll get some unexpected results if you don't.

For saturation, I used:
// CREDIT: http://alienryderflex.com/saturation.html (public-domain function)
//  The "change" parameter works like this:
//    0.0 creates a black-and-white image.
//    0.5 reduces the color saturation by half.
//    1.0 causes no change.
//    2.0 doubles the color saturation.
//  Note:  A "change" value greater than 1.0 may project your RGB values
//  beyond their normal range, in which case you probably should truncate
//  them to the desired range before trying to use them in an image.

When I added the changeSaturation() to my chromaKey for loop, things started getting a little...laggy.
for (let i=0;i<frame.data.length;i+=4) //Uint8 Clamped Array numbers between 0 and 255 RGBA

```javascript
{
  d[i] = Math.min(d[i]*rMult,255); //r
  d[i+1] = Math.min(d[i+1]*gMult,255); //g
  d[i+2] = Math.min(d[i+2]*bMult,255); //b

  d[i] = changeSaturation(d[i],d[i+1],d[i+2],sat)[0];
  d[i+1] = changeSaturation(d[i],d[i+1],d[i+2],sat)[1];
  d[i+2] = changeSaturation(d[i],d[i+1],d[i+2],sat)[2];
}
```

I wrote a little clampTo utility function for use with RGB (without arguments, clamps to 0,255).

```javascript
//clamps a given value to a supplied range [MIN,MAX], inclusive
//defaults to 0, 255 for use with RGB
  function clampTo(value,low=0,high=255) {
    if (typeof(value)!=="number") { console.error('Argument must be a number'); return false; }
    if (low>high) { console.error('Range must be given in format LOW -> HIGH w/2 arguments'); return false; }
    (value>high) ? value=high : value;
    (value<low) ? value=low : value;
    return value;
  }

  console.assert(clampTo(0)===0,'FAILURE');
  console.assert(clampTo(255)===255,'FAILURE');
  console.assert(clampTo(-1)===0,'FAILURE');
  console.assert(clampTo(256)===255,'FAILURE');
  console.assert(clampTo(0,1,444)===1,'FAILURE');
  console.assert(clampTo(-1,1,444)===1,'FAILURE');
  console.assert(clampTo(443,1,444)===443,'FAILURE');
  console.assert(clampTo(445,1,444)===444,'FAILURE');
  console.assert(clampTo("HELLOTHERE",1,444)===false,'FAILURE');
  ```

Ways to improve performance?

* Can make the parameters like brightness have their endpoints vary dynamically based on some characteristic of the image overall (like average brightness or whatever) to make the range adjustment more useful.

* Create a curves feature e.g., photoshop for contrast and stuff

* Create a histogram feature!

* Create the concept of a FILTER: which is just an array of transformations, e.g.,: rMult, gMult, bMult, sat, and allow you to apply different ones to the image. Have "Sample" images which you can pick from w/ different filters applied., etc.

To implement:

* [X]Contrast, [X] Brightness, [ ]Sharpness

* THINGS

* AND OTHER THINGS.

##Adding Sharpness

FINISH THE 2D -> 1D mapping


// TODO
// document.querySelector('button.sharpen').addEventListener('click',sharpen);
