#Day Fourteen of JS30
##Objects & Arrays -> REFERENCE vs Copy
====

* Variables copy by value.
```
let age=100;
let age2=age;
console.log(age,age2);
age = 200;
console.log(age,age2); // age2 will NOT be updated
```

* Arrays/objects copy by reference.

```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'Lux'
console.log(players, team);
```

Here, *both* players and team are updated since team stores a *reference* to players, not a copy of it when we assign it in this way.

* So how to copy an array if you *want* a copy and not a reference? `arrCopy=originalArr.slice()` Slice w/ no args = copy. Or `arrCopy=[].concat(original);`. Or the ES6 spread operator: `arrCopy=[...originalArr];`. Or `arrCopy=Array.from(originalArr)`.

###But, but..which is fastest? Using JSPerf (which sometimes doesn't quite measure what you think it does though):

####Testing in Chrome 55.0.2883 / Mac OS X 10.10.5

|Test|Ops/sec|
|---|---|
|const arrayCopySlice=cities.slice();|90,418 ±15.34% fastest  |
|const arrayCopyConcat=[].concat(cities);|100,695 ±13.69% fastest |
|const arrayCopySpread=[...cities];|3,624 ±5.11% 96% slower |
|const arrayCopyFrom = Array.from(cities);|2,943 ±7.44% 97% slower   |

So basically, use .slice() or [].concat to copy arrays unless there's a compelling reason.
(https://jsperf.com/vanilla-js-array-copy-methods)[https://jsperf.com/vanilla-js-array-copy-methods link to JSperf]

##How to Copy Objects

* Object.assign(). Start with blank object {}. `javascript var objCopy = Object.assign({}, objToCopy, {propToOverwrite: value})`

* No Object spread yet (e.g., const copyTwo={...objToCopy}) but **WE CAN HOPE**.

# These copies are only ONE LEVEL DEEP for both Arrays and Objects.

For example.
```javascript
const inceptionObject = {
  name: "Trinity",
  attributes: {
    age: 44,
    skills: "fighting"
  }
};

const inceptionCopy = Object.assign({},inceptionObject,{sidekick: "Morpheus"});
inceptionCopy.attributes.age=99;
console.log(inceptionCopy.attributes.age);
console.log(inceptionObject.attributes.age);
console.assert(inceptionCopy.attributes.age!==inceptionObject.attributes.age,'UH OH ONLY ONE LEVEL DEEP');
```

Console.assert fails because while we have a COPY of the name attribute (level 1), we have a REFERENCE to the nested attributes object.

* HAO TO FIX?! Clonedeep, using JSON `var cloned = JSON.parse(JSON.stringify(objectToClone));` a la "the poor man's deep clone". THOUGH be careful b/c you very rarely need to clonedeep. Somtimes it's just lazy and it's slow and memory hoggy. So yes.

# FUN ENHANCEMENTS:

* Write a deepClone function.
