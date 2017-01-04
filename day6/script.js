window.onload = function() {

  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  var xhr = new XMLHttpRequest(),
  method = "GET",
  url=endpoint;

  let cities=[];

  xhr.open(method,url,true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cities=JSON.parse(xhr.responseText);
    }
  };
  xhr.send();

  //shamelessly copied from JS30 github repo...
  function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  function findMatches(wordToMatch,cityList) {
    return cityList.filter(function(place)
    {
        const regex = new RegExp(wordToMatch,'i');
        return (place.city.match(regex) || place.state.match(regex));
    });
  }

  function sliceHighlight(string,highlight,className="red") {
    let beginning = "";
    let middle = "";
    let end = "";

    const regex = new RegExp(highlight, 'i');
    var strIndex = string.search(regex);
    if (strIndex===-1) { return string; } // no match!

    //if the match was not at the beginning, recover those characters
    (strIndex!==0) ? beginning = string.slice(0,strIndex) : 0
    //slice to highlight
    middle = '<em class="'+className+'">'+string.slice(strIndex,strIndex+highlight.length)+'</em>';
    //if the match was not at the end, recover those characters
    ((strIndex+highlight.length)<string.length) ? end = string.slice(strIndex+highlight.length) : 0
    return beginning+middle+end;
  }

const list = document.querySelector('ul.suggestions');
  function displayMatches() {
    list.innerHTML=null;
    var matches = findMatches(this.value,cities);
    var HTML="";
    matches.forEach(m=>{
      HTML+='<li><span class="name">'+sliceHighlight(m.city,this.value)+', ';
      HTML+=sliceHighlight(m.state,this.value)+'</span> <span class="population"><em>Population:</em> '+numberWithCommas(m.population)+'</span></li>';
    });
    list.innerHTML=HTML;
  }

  const input = document.querySelector('.search');
  input.addEventListener('change', displayMatches);
  input.addEventListener('keyup', displayMatches);

  function handleInputChange(e){
    console.log(e);
  }

}
