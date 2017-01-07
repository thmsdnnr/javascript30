//document.querySelector('div.nav').style.display='block'; HELL!

window.onload = function() {
  let visible=false;

  let links=document.querySelectorAll('a');
  let listItems = document.querySelectorAll('ul.menu li');
  console.log(links);
  //live
  Array.from(links).forEach((l)=>l.addEventListener('mouseover',magicNavigation,{capture:false}));
  Array.from(listItems).forEach((l)=>l.addEventListener('mouseover',magicNavigation,{capture:false}));
  //kill
  //Array.from(links).forEach((l)=>l.addEventListener('mouseout',killNav,{capture:false}));
  //Array.from(listItems).forEach((l)=>l.addEventListener('mouseout',killNav));

  let d = document.createElement('div');
  d.classList+='navBox invisible';
  document.body.append(d);

  function magicNavigation(e) {
    e.stopPropagation();
    visible=true;
    if(e.target.id==="") { return; } //NOT THE EVENTS YR LOOKING 4
    d.innerHTML=null;
    d.classList=Array.from(d.classList).filter((c)=>c!=='invisible'); //remove class invisible
    let coords=e.target.getBoundingClientRect();
    d.style.transform=`translate(${coords.left}px,${coords.top+coords.height}px)`;
    populateNav(e,coords);
  }

  function populateNav(e,coords) {
    let popular;
    let childDiv = document.createElement('div');
    childDiv.classList+='navChild';
    childDiv.style.maxWidth=coords.width*1.2; //scale by 1.2
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

  function killNav(e) {
    e.stopPropagation();
    if (visible) {
      d.classList+='invisible';
      visible=false;
    }
    else { return; }
    console.log('kill :');
    console.dir(e);
    //document.querySelector('div.navChild').classList+='invisible';
  }

  let home=`<h1>Stuff</h1><br />More Stuff<br />More stuff<br />More stuff`;
  let status=`<h1>HEADER</h1><p>PARAGRAPH</p><p>ANOTHER ONE</p>`;
  let tweets=`<p>Painting should do one thing.</p><p>It should put happiness in your heart.</p><p>Use your imagination, let it go.</p>
  <p>Painting should do one thing.</p><p>It should put happiness in your heart.</p><p>Use your imagination, let it go.</p>`;
  let history=`I guess that would be considered a UFO. A big cotton ball in the sky. There are no mistakes. You can fix anything that happens. Work on one thing at a time. Don't get carried away - we have plenty of time. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen.`;
  let contact=`<h1>HEADER</h1><p>PARAGRAPH</p><p>ANOTHER ONE</p>`;
}
