#Day Ten of JS30
##CHECK YOURSELF before you Wreck Yourself
###Or, gotta check em' allllllll!
====

####TIL: When you pass a boolean as an argument to a function, be V. V. careful you don't do so as a STRING "true"/"false", because a STRING "false" is always TRUE. Actually, even

Strategy: listen for event click on every div.input. `const inputs = document.querySelectorAll('div.item input');` Log the last and next-to-last index of an uncheck event and a check event. The index is simply `lastCheckedIndex=Array.from(inputs).indexOf(e.target);`. Then whenever there is a shift held down and we have two of these inputs, call   

```function checkYourself(a,b,flag) { //before you...
    var indices = returnLowToHigh(a,b);
    console.log("indices: "+indices+"flag: "+flag);
    for (var i=indices[0];i<indices[1];i++) { inputs[i].checked=flag; }//GOTTA CHECK EM ALL!
  }
```

to set the flag on all the indices. We also call styleParentDivs() when calling checkYourself in to add or remove the class on the parent divs of the checked boxes:

`inputs.forEach(i=>(i.checked) ? i.parentNode.classList.add('darken') : i.parentNode.classList.remove('darken'));`

The rest is just done with CSS transitions and styling.

* An extra challenge?! Make it work for *unchecking* en masse as well. **ACCOMPLISHED**

* Make the effect work for divs as a whole instead of just checkboxes!
