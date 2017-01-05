#Day Nine of JS30
##Sweet Dev-Tools Tricks
====
1. To find out what bit of JS is tweaking your style attributes on an element: INSPECT ELEMENT -> BREAK ON: ATTRIBUTE MODIFICATION (sets debug) -> pauses at line of code causing attribute change. SWEET!

2.  ```console.log(`Hello I am ${var}`);``` ES6 backticks for inserting vars in strings directly. SWEET!

3. ```console.log('%c SOME TEXT', 'font-size: 40px')``` CSS styling for your CONSOLE LOG. WHOA!

4. ```console.warn(''); console.error('');``` warning/error + stack trace

5. ```console.info('interesting info');``` gives console info icon and information

6. ```console.assert('1===2', 'that is wrong');``` ONLY returns if it is **false**.

7.  ```const p = document.querySelector('p'); console.dir(p)``` gives you the dropdown with all available methods on the ELEMENT

8. ```console.group('string'); console.groupEnd('string'); ``` groups console messages. Plug in ```console.groupCollapsed()``` for the first one for even more better.

9. ```console.count('Me'); console.count('Me');``` returns "Me: 2"!

10. ```console.time('fetching data'); // do something that takes time
when done, console.timeEnd('fetching data')``` returns 'fetching data': XX.XXXms.

11. ```console.table(DATA);``` -> gives a sweet console table out of yr data.
