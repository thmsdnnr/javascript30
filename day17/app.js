window.onload = function() {
  //sort band names without "A", "an", or "the" and do so alphabetically
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
  'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'];
  const articles = ['The','the','in','A','a','an','An'];

  listBands(sortWithoutArticles(bands, articles));

  function sortWithoutArticles(arr, articles) {
    var bandAid = [];
    for (var i=0;i<arr.length;i++) {
      var resultWord=[];
      var words=arr[i].split(" ");
      for (var j=0;j<words.length;j++) {
        if (articles.indexOf(words[j])===-1) {resultWord.push(words[j]);} //not an article
      }
      var joined=resultWord.join(" ");
      bandAid.push([joined,arr[i]]);
    }
    bandAid.sort(function(a,b) {
      var first=a[0].toUpperCase();
      var second=b[0].toUpperCase();
      if (first<second) {return -1;}
      else if (first>second) { return 1;}
      return 0;
    });
  return bandAid; //contains for every element the original band name iwth articles in index 1
}

function listBands(arr) {
  const list = document.querySelector('ul#bands');
  arr.forEach(band=>{
    var bandLi = document.createElement('li');
    bandLi.innerHTML=band[1];
    list.appendChild(bandLi);
  });
}
}
