window.onload = function() {
  let mouseOverNav=false;
  let mouseOverToolTip=false;

  let links=document.querySelectorAll('a');
  let listItems = document.querySelectorAll('ul.menu li');
  let d = document.createElement('div');
  d.classList.add('navBox','invisible');
  document.body.append(d);

  links.forEach((l)=>l.addEventListener('mouseover',magicNavigation,{capture:false}));
  d.addEventListener('mouseover',()=>mouseOverToolTip=true);
  d.addEventListener('mouseout',()=>{mouseOverToolTip=false; killNav();});

  let nav=document.querySelector('nav');
  links.forEach((l)=>l.addEventListener('mouseover',()=>mouseOverNav=true));
  nav.addEventListener('mouseout',()=>{mouseOverNav=false; killNav();});

  function killNav() { setTimeout(function() {
    ((mouseOverNav)||mouseOverToolTip) ? 0 : d.classList.add('invisible'); },250); }

  function magicNavigation(e) {
    e.stopPropagation();
    let coords=e.target.getBoundingClientRect();
    d.innerHTML=null;
    d.classList.remove('invisible');
    d.style.top=`${coords.height+50}px`;
    d.style.left=`${coords.right-coords.width}px`;
    d.style.width=`${coords.width*2}px`;
    populateNav(e,coords);
  }

  function populateNav(e,coords) {
    let popular;
    let childDiv = document.createElement('div');
    childDiv.classList+='navChild';
    childDiv.style.width=coords.width*1.2; //scale by 1.2
    switch(e.target.id){
      case "home": popular=home; break;
      case "status": popular=status; break;
      case "tweets": popular=tweets; break;
      case "history": popular=history; break;
      case "contact": popular=contact; break;
    }
    childDiv.innerHTML=popular;
    d.append(childDiv);
  }

//stuff to populate the div with
  let home=`<h1>Stuff</h1><br />More Stuff<br />More stuff<br />More stuff`;
  let status=`<h1>HEADER</h1><p>PARAGRAPH</p><p>ANOTHER ONE</p>`;
  let tweets=`<p>Painting should do one thing.</p><p>It should put happiness in your heart.</p><p>Use your imagination, let it go.</p>`;
  let history=`<table><tr><td>I guess that would be considered a UFO.</td></tr><tr><td>A big cotton ball in the sky. There are no mistakes. You can fix anything that happens.</td></tr><tr><td>Work on one thing at a time. Don't get carried away - we have plenty of time. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen.</td></tr></table>`;
  let contact=`<h1>HEADER</h1><p>PARAGRAPH</p><p>ANOTHER ONE</p>`;
}
