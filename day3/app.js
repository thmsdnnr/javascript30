window.onload = function () {
  const inputs = Array.from(document.querySelectorAll(".slidebox input"));
  inputs.forEach(input=>addEventListener('change', slideRule));
  inputs.forEach(input=>addEventListener('mousemove', slideRule));

  function slideRule(e) {
   switch (e.target.dataset.key)
    {
      case "--fnt-sz":
        document.documentElement.style.setProperty('--fnt-sz', e.target.valueAsNumber*7+"px");
        var s=document.querySelector("span.font-sz");
        s.innerHTML=null;
        s.append(e.target.valueAsNumber*7+"px");
        break;

      case "--rotation-speed":
        document.documentElement.style.setProperty('--rotation-speed', (9000/e.target.valueAsNumber)+"ms");
        var s=document.querySelector("span.rot-speed");
        s.innerHTML=null;
        s.append(Math.round(9000/e.target.valueAsNumber)+"ms");
        break;

      case "--width":
        document.documentElement.style.setProperty('--width', e.target.valueAsNumber*50+"px");
        var s=document.querySelector("span.width");
        s.innerHTML=null;
        s.append(e.target.valueAsNumber*50+"px");
        break;

      default: break;
    }
  }
}
