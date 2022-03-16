//EXAMPLE 4: Change Strings to Numbers
// let strings = ['10', '20', '30'];
// let numbers = strings.map(string => Number(string));
// console.log(numbers);

// EXAMPLE 5: get real names of the avangers's array
let avengers = [
    {name: 'steve rogers', heroName: 'captain america'},
    {name: 'tony stark', heroName: 'iron man'},
    {name: 'bruce banner', heroName: 'the hulk'},
    {name: 'peter parker', heroName: 'spiderMan'},
    {name: 'tchalla', heroName: 'blackPanther'}
]
// let realNames = avengers.map(avenger => avenger.name);
const getName = avenger => avenger.name;
const realNames = avengers.map(getName);
console.log(realNames);