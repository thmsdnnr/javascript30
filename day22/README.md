#Day TwentyTwo of JS30
##Follow-along Link Highligher
====

First steps toward a sweet looking navbar. My first approach was:

```javascript
let links=document.querySelectorAll('a');
links.forEach(link=>{
  link.addEventListener('mouseover',function(){link.classList+='hover';});
  link.addEventListener('mouseout',function(){link.classList='';});
console.log(links);
});
```

```CSS
hover {
  background-color: rgba(255, 133, 213, 0.7);
  color: #FFFFFF;
  border-radius: 5%;
}
a {
  transition: all 200ms ease-out;
}
```

However, this didn't take advantage of the fact that we can use the coordinates of the links on the screen themselves, which I think was the intention of the exercise. So I changed it! The key to grabbing the coordinates of the hovered element is: `this.getBoundingClientRect()`.

Had a little square in the upper-left corner the size of my span's box-shadow (about a 2px by 2px green box) that I got rid of by adding a style='display: none' to the span element before its position had been changed by the first mouseover event.

###TO-DO:

* On window resize before another link is highlighted, the div is not auto-positioned to the client rect of the element on which it was prior to window resize, so the div is highlighting a non-text area. Could add an event listener on window resize to call getCoordsAndHighlight again.

For now I just do s.style.display='none'; to make the offset not appear but there's probably a less hacky way to do it, and it probably involves an additional translation of s.style based on information from e.target.scren in the 'resize' eventListener.
