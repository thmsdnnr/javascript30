#Day Ten of JS30
##CHECK YOURSELF before you Wreck Yourself
###Or, gotta check em' allllllll!
====

####TIL: When you pass a boolean as an argument to a function, be V. V. careful you don't do so as a STRING "true"/"false", because a STRING "false" is always TRUE. Actually, even

Strategy: listen for event click on every div.item. `const items = document.querySelectorAll('div.item');`

Set flag for shiftDown. If click on a div item and a shiftDown event occur, check all children of div.inbox for status checked:
`const checked=(Array.from(items).filter((i)=>i.children[0].checked===true));`

Obtain the index of each of the checked items
`var indexes = checked.map(c=>Array.from(items).indexOf(c));`

Then just iterate over the elements and set checked

* An extra challenge?! Make it work for *unchecking* en masse as well. **ACCOMPLISHED**

* Make the effect work for divs as a whole instead of just checkboxes!
