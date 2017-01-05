window.onload = function() {
    // start with strings, numbers and booleans
    let age=100;
    let age2=age;
    console.log(age,age2);
    age = 200;
    console.log(age,age2); // age2 will NOT be updated


    // Let's say we have an array and we want to make a copy of it.
    // You might think we can just do something like this:
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    console.log(players, team);
    console.log(players, team);
    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    const teamCopy1=players.slice();
    const teamCopy2=[].concat(players);
    const teamCopy3=[...players]; //ES6 spread
    const teamCopy4=Array.from(players);
    team[3] = 'Lux';
    console.log("Players: "+players);
    console.log("Copies: "+teamCopy1+" "+teamCopy2);
    console.log("spread: "+teamCopy3);
    console.log("Array.from: "+teamCopy4);

    // one day
    // or create a new array and concat the old one in
    // or use the new ES6 Spread
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object
    // with Objects

    const person = {
      name: "Chuck N",
      age: 44
    };

    const captain = Object.assign({},person,{number: 99});

    console.log(captain); // returns reference to original, NOT a copy
    console.log(person);
    // and think we make a copy:
    // how do we take a copy instead?

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

    // We will hopefully soon see the object ...spread
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

}
