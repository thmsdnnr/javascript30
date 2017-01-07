window.onload = function() {
  let links=document.querySelectorAll('a');
  let s = document.createElement('span');
  let currentLink;
  s.classList+='hover';
  s.style.display='none';
  document.body.append(s);

  links.forEach(link=>{link.addEventListener('mouseover',getCoordsAndHighlight);});

  function getCoordsAndHighlight(e) {
    currentLink=e.target;
    let coords=currentLink.getBoundingClientRect();
    s.style.transform=`translate(${coords.left}px, ${coords.top}px)`; //translate(x,y)
    s.style.height=coords.height;
    s.style.width=coords.width;
    s.style.display='';
    }

    function updateCoords(e) {
      let coords=currentLink.getBoundingClientRect();
      let spa=document.querySelector('span.highlight');
      spa.style.transform=`translate(${coords.left}px, ${coords.top}px)`; //translate(x,y)
    }

    window.addEventListener('resize',function(e){
      s.style.display='none';
      //console.log(e.target.screen);
    });
  }
