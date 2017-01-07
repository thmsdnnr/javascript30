const catWikis=["cats",["Cat","Cats (musical)","Catskill Mountains","Cats and the Internet","Cat's in the Cradle","Catskill Mountain Railroad","Catskill Park","Cat's Eye Nebula","Cats & Dogs","Cats Laughing"],["The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.","Cats is a musical composed by Andrew Lloyd Webber, based on Old Possum's Book of Practical Cats by T. S.","The Catskill Mountains, also known as the Catskills, are a large area in the southeastern portion of the U.S.","Images and videos of domestic cats make up some of the most viewed content on the web, particularly image macros in the form of lolcats.","\"Cat's in the Cradle\" is a 1974 folk rock song by Harry Chapin from the album Verities & Balderdash. The single topped the Billboard Hot 100 in December 1974. As Chapin's only No.","The Catskill Mountain Railroad (reporting mark CMRR), is a heritage tourist railroad based in Kingston, New York, that began operations in 1982. While freight service was no longer offered, regular passenger excursions were operated on two sections of track separated by three washouts as a result of severe flooding.","The Catskill Park is in the Catskill Mountains in New York in the United States. It consists of 700,000 acres (280,000 ha; 2,800 km2) of land inside a Blue Line in four counties: Delaware, Greene, Sullivan, and Ulster.","The Cat's Eye Nebula or NGC 6543, is a relatively bright planetary nebula in the northern constellation of Draco, discovered by William Herschel on February 15, 1786. It was the first planetary nebula whose spectrum was investigated by the English amateur astronomer William Huggins, demonstrating that planetary nebulae were gaseous and not stellar in nature.","Cats & Dogs is a 2001 American-Australian family action-comedy film, directed by Lawrence Guterman with screenplay by John Requa and Glenn Ficarra, and stars Jeff Goldblum, Elizabeth Perkins and Alexander Pollock.","Cats Laughing is a folk rock band, founded in the late 1980s in Minneapolis, Minnesota, and revived in 2015. Several of its members, including Emma Bull and best-selling author Steven Brust, are better known as writers of fantasy and science fiction."],["https://en.wikipedia.org/wiki/Cat","https://en.wikipedia.org/wiki/Cats_(musical)","https://en.wikipedia.org/wiki/Catskill_Mountains","https://en.wikipedia.org/wiki/Cats_and_the_Internet","https://en.wikipedia.org/wiki/Cat%27s_in_the_Cradle","https://en.wikipedia.org/wiki/Catskill_Mountain_Railroad","https://en.wikipedia.org/wiki/Catskill_Park","https://en.wikipedia.org/wiki/Cat%27s_Eye_Nebula","https://en.wikipedia.org/wiki/Cats_%26_Dogs","https://en.wikipedia.org/wiki/Cats_Laughing"]];

window.onload = function() {
const display=document.querySelector('div.detect');
const rCont=document.querySelector('div.resultsContainer');
let success=false;

function fetchWiki(query,callback) {
  var xhr = new XMLHttpRequest();
  method="POST";
  url='https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=revisions&search='+query+'&rvprop=content&rvlimit=10&rvsection=0&origin=*';
  xhr.open(method,url,true);
  xhr.setRequestHeader("Api-User-Agent","Example/1.0");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onload=function() {
    let wikis=JSON.parse(xhr.responseText);
    callback(wikis);
  };
  xhr.send();
}

function postWikis(wikis) {
  rCont.innerHTML=null;
  console.log(wikis+"postwikis");
  for(var i=0;i<wikis[1].length;i++)
  {
    if(wikis[1][i]){
      wikis[1][i] //name
      wikis[2][i] //description
      wikis[3][i] //url
      let d = document.createElement('div');
      d.classList+='wiki'
      d.innerHTML+=`<p><a href="${wikis[3][i]}" target="_new"><h2>${wikis[1][i]}</h2></a> ${wikis[2][i]}</p>`;
      rCont.append(d)
    }
  }
}

function speechSynthesis(phrase) {
    var u=new SpeechSynthesisUtterance(phrase);//=window.speechSynthesis;
    u.lang = 'en-US';
    u.rate = .7;
    u.pitch = 1.2;
    window.speechSynthesis.speak(u);
    }

const constraints = {audio: true};
var promiseV=navigator.mediaDevices.getUserMedia(constraints).then(recognizeMe).catch(err => {console.error(`OH NO!!!`, err);});

function recognizeMe() {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
  var recognition = new SpeechRecognition();
  
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(e) {
    success=true;
    var last = e.results.length-1;
    var color = e.results[last][0].transcript;
    console.log(color+" confidence:"+e.results[0][0].confidence);
    display.innerHTML=null;
    display.innerHTML=color;

    speechSynthesis(color);
    window.setTimeout(drawMoreSpeechBtn,5000); //another round?
    fetchWiki(color,postWikis);
    //fetchPics(color,postPics);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    if (!success) {drawMoreSpeechBtn();}
    console.log("speech over");
  }

  recognition.onerror = function(e) {
    if(e.error=="no-speech") { drawMoreSpeechBtn(); }
    else { console.error(e);}
  }
}

  function drawMoreSpeechBtn() {
    display.innerHTML=null;
    display.innerHTML+=`<button class="speakMore">Speak More</button>`;
    document.querySelector('button.speakMore').addEventListener('click',function(){
      display.innerHTML=null;
      display.innerHTML=`<h4>I am listening to you again, now.</h4>`;
      recognizeMe();
    });
  }
  postWikis(catWikis); //initialize
}
