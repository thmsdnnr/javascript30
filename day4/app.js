window.onload = function()
{
var russianCityNames=["Moscow","Saint Petersburg","Novosibirsk","Yekaterinburg","Nizhny Novgorod","Samara","Omsk",
"Kazan","Chelyabinsk","Rostov-on-Don","Ufa","Volgograd","Perm","Krasnoyarsk","Voronezh","Saratov","Krasnodar",
"Tolyatti","Izhevsk","Ulyanovsk","Barnaul","Vladivostok","Yaroslavl","Irkutsk","Tyumen","Khabarovsk","Makhachkala",
"Orenburg","Novokuznetsk","Kemerovo","Ryazan","Tomsk","Astrakhan","Penza","Naberezhnye Chelny","Lipetsk","Tula","Kirov",
"Cheboksary","Kaliningrad","Bryansk","Kursk","Ivanovo","Magnitogorsk","Ulan-Ude","Tver","Stavropol","Nizhny Tagil",
"Belgorod","Arkhangelsk","Vladimir","Sochi","Kurgan","Smolensk","Kaluga","Chita","Oryol","Volzhsky","Cherepovets",
"Vladikavkaz","Murmansk","Surgut","Vologda","Saransk","Tambov","Sterlitamak","Grozny","Yakutsk","Kostroma",
"Komsomolsk-on-Amur","Petrozavodsk","Taganrog","Nizhnevartovsk","Yoshkar-Ola","Bratsk","Novorossiysk",
"Dzerzhinsk","Nalchik","Shakhty","Orsk","Syktyvkar","Nizhnekamsk","Angarsk","Stary Oskol","Veliky Novgorod",
"Balashikha","Blagoveshchensk","Prokopyevsk","Biysk","Khimki","Pskov","Engels","Rybinsk","Balakovo","Severodvinsk",
"Armavir","Podolsk","Korolyov","Yuzhno-Sakhalinsk","Petropavlovsk-Kamchatsky","Syzran","Norilsk","Zlatoust",
"Kamensk-Uralsky","Mytishchi","Lyubertsy","Volgodonsk","Novocherkassk","Abakan","Nakhodka","Ussuriysk","Berezniki",
"Salavat","Elektrostal","Miass","Rubtsovsk","Almetyevsk","Kovrov","Kolomna","Maykop","Pyatigorsk","Odintsovo",
"Kopeysk","Novomoskovsk","Zheleznodorozhny","Khasavyurt","Cherkessk","Kislovodsk","Serpukhov","Pervouralsk",
"Novocheboksarsk","Nefteyugansk","Dimitrovgrad","Neftekamsk","Orekhovo-Zuyevo","Kamyshin","Derbent","Nevinnomyssk",
"Krasnogorsk","Murom","Bataysk","Sergiyev Posad","Novoshakhtinsk","Noyabrsk","Shchyolkovo","Kyzyl","Oktyabrsky",
"Achinsk","Seversk","Novokuybyshevsk","Yelets","Arzamas","Obninsk","Zhukovsky","Novy Urengoy","Elista","Pushkino",
"Artyom","Mezhdurechensk","Leninsk-Kuznetsky","Sarapul","Yessentuki","Kaspiysk","Noginsk","Tobolsk","Ukhta","Serov",
"Votkinsk","Velikiye Luki","Michurinsk","Kiselyovsk","Novotroitsk","Zelenodolsk","Solikamsk","Berdsk","Ramenskoye",
"Domodedovo","Magadan","Glazov","Kamensk-Shakhtinsky","Zheleznogorsk","Kansk","Nazran","Gatchina","Sarov",
"Voskresensk","Dolgoprudny","Bugulma","Kuznetsk","Gubkin","Kineshma","Yeysk","Reutov","Ust-Ilimsk","Novouralsk",
"Zheleznogorsk","Usolye-Sibirskoye","Azov","Buzuluk","Chaykovsky","Balashov","Ozyorsk","Yurga","Kirovo-Chepetsk",
"Kropotkin","Klin","Khanty-Mansiysk","Vyborg","Troitsk","Bor","Shadrinsk","Belovo","Mineralnye Vody",
"Anzhero-Sudzhensk","Birobidzhan","Lobnya","Chapayevsk","Georgiyevsk","Chernogorsk","Minusinsk","Mikhaylovsk",
"Yelabuga","Dubna","Vorkuta","Novoaltaysk","Yegoryevsk","Asbest","Beloretsk","Belogorsk","Gukovo","Tuymazy",
"Stupino","Kstovo","Volsk","Ishimbay","Kungur","Zelenogorsk","Lysva","Sosnovy Bor","Borisoglebsk","Ishim",
"Naro-Fominsk","Budyonnovsk","Donskoy","Polevskoy","Leninogorsk","Slavyansk-na-Kubani","Pavlovsky Posad","Zarechny",
"Tuapse","Rossosh","Labinsk","Kumertau","Sibay","Buynaksk","Klintsy","Rzhev","Revda","Tikhoretsk","Neryungri",
"Aleksin","Alexandrov","Meleuz","Salsk","Dmitrov","Lesosibirsk","Gus-Khrustalny","Chistopol","Chekhov","Pavlovo",
"Kotlas","Belebey","Iskitim","Verkhnyaya Pyshma","Vsevolozhsk","Apatity","Krasnoturyinsk","Prokhladny",
"Mikhaylovka","Anapa","Svobodny","Ivanteyevka","Shuya","Tikhvin","Kogalym","Shchyokino","Krymsk","Vyazma",
"Gorno-Altaysk","Vidnoye","Arsenyev","Vyksa","Klimovsk","Liski","Krasnokamensk","Volzhsk","Izberbash","Zhigulyovsk",
"Fryazino","Uzlovaya","Lytkarino","Gelendzhik","Roslavl","Nyagan","Timashyovsk","Belorechensk","Borovichi",
"Solnechnogorsk","Nazarovo","Cheremkhovo","Vyshny Volochyok","Kirishi","Krasnokamsk","Beryozovsky","Balakhna",
"Lesnoy","Livny","Donetsk","Severomorsk"];

  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1
  // Some data we can work with
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  var one = inventors.filter((i)=>((i.year<1600)&&(i.year>=1500)));
//  console.log(one);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  var two = inventors.map((i)=>[i.first,i.last]);
//  console.log(two);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  var three = inventors.sort((a,b)=>a.year-b.year);
  //three.forEach(i=>console.log(i.year));

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  var four = inventors.reduce(function(a,b){return a+(b.passed-b.year);},0); //don't forget initial value!
  //console.log(four); // (861 years)

  // 5. Sort the inventors by years lived
  var five = inventors.sort((a,b)=>(a.passed-a.year)-(b.passed-b.year)); //youngest to oldest
  //five.forEach(i=>console.log(i.passed-i.year));

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  //https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Russia_by_population
  /*I had to look at the answer for this so I decided to grab a list of Russian cities from the above
  Wikipedia link. I stored them in this source with google chrome's copy(JSON.stringify(cityText)) so that
  I can do operations on them below without having to use the Chrome console.*/

  /* CODE TO GRAB THE CITY-TEXT ARRAY:
  const tR = document.querySelectorAll('table tbody tr');
  var tRArray = Array.from(tR);
  var cityList=tRArray.map(a => a.children[1]);
  cityList=cityList.filter(i=>i); // remove undefineds
  var russianCityNames=cityList.map(a => a.textContent) */

  function greaterThanN(n) { return russianCityNames.filter(i=>i.length>n); }

//  console.log(greaterThanN(6).length);
//  console.log(greaterThanN(10).length);

  //top ten longest cities?
  var topTen=russianCityNames.sort((a,b)=>b.length-a.length).slice(0,9);
  var bottomTen=russianCityNames.sort((a,b)=>a.length-b.length).slice(0,9);
//  console.log(topTen)
//  console.log(bottomTen);

//counting letters
  var letterDict = {};
  russianCityNames.forEach(function(city) {
    for (var i=0;i<city.length;i++) {
      var letter=city[i].toUpperCase();
      if (letter.match(/[A-Z]/)!==null) {
      (letterDict[letter]) ? letterDict[letter]+=1 : letterDict[letter]=1;
    }
  }
});

  console.log(letterDict);
  console.log(Object.keys(letterDict).sort()); //heh no 'J's or 'Q's
  console.log(letterDict[Object.keys(letterDict).sort()[0]]);
  var letterCount=Object.keys(letterDict).reduce((a,b)=>a+letterDict[b],0);

//mapping relative letter frequencies
  var freqDict = {};

  for (var i=0;i<Object.keys(letterDict).length;i++) {
    freqDict[Object.keys(letterDict)[i]] = (letterDict[Object.keys(letterDict)[i]]/letterCount); }

  console.log(freqDict); // contains letters of Russian cities with their relative frequencies

  //now let's draw a graph!
  const graphWidth = 700;
  const graphHeight = 1000;
  const barWidth = (graphWidth/Object.keys(freqDict).length);
  const sortedKeys=Object.keys(freqDict).sort();
  const tR = document.querySelector('div.russiaGraph');

  for (var i=0;i<sortedKeys.length;i++) {
    var div = document.createElement('div');
    div.style.width = barWidth;
    div.style.height = freqDict[sortedKeys[i]]*graphHeight; //relative frequency * graphHeight
    div.style.background = "#AA00CC";
    div.style.color = "black";
    div.classList.add('bar');
    div.innerHTML = "<span class=\"legend\">"+sortedKeys[i]+"("+(freqDict[sortedKeys[i]]*100).toFixed(2)+"%)</span>";
    tR.appendChild(div);
  }

  const nL = document.querySelector('div.nameList');
  russianCityNames.sort((a,b)=>b.length-a.length).map(name=>nL.append(name+" "));

  var unfiltered=["Boulevards of Paris","City walls of Paris","Thiers wall","Wall of Charles V","Wall of Philip II Augustus",
  "City gates of Paris","Haussmann's renovation of Paris","Boulevards of the Marshals","Boulevard Auguste-Blanqui","Boulevard Barbès","Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix","Boulevard de Strasbourg","Boulevard des Capucines","Boulevard de la Chapelle","Boulevard de Clichy",
  "Boulevard du Crime","Boulevard Haussmann","Boulevard de l'Hôpital","Boulevard des Italiens","Boulevard de la Madeleine",
  "Boulevard de Magenta","Boulevard Montmartre","Boulevard du Montparnasse","Boulevard Raspail","Boulevard Richard-Lenoir",
  "Boulevard de Rochechouart","Boulevard Saint-Germain","Boulevard Saint-Michel","Boulevard de Sébastopol","Boulevard du Temple",
  "Boulevard Voltaire","Boulevard de la Zone"];

  var deBoulevards = ["Boulevard de l'Amiral-Bruix","Boulevard de Strasbourg","Boulevard des Capucines","Boulevard de la Chapelle",
  "Boulevard de Clichy","Boulevard de l'Hôpital","Boulevard des Italiens","Boulevard de la Madeleine","Boulevard de Magenta",
  "Boulevard de Rochechouart","Boulevard de Sébastopol","Boulevard de la Zone"];

  //console.log(deBoulevards.length);

  //do this with AJAX? Hahahahaahaha....
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  var seven = people.sort((a,b) => { return (a.split(", ")[0] > b.split(", ")[0]) ? 1 : -1; });
//  console.log(seven);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const singles=data.reduce(function(obj,item)
  {
      if(!obj[item]) { obj[item]=0; }
      obj[item]+=1;
      return obj; //return obj for each iteration!
  }, {}); // don't forget to start with an empty object!
  console.log(singles);
}
