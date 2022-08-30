import { Cat } from './basic.js';

// const Cat = require('./basic.js');


let nameVar = 'Maria';
nameVar = 'Jens';

const pi = 3.1415

var pen = 'Red';


function myFunction(a,b){
    return a + b;
}

// console.log(myFunction(2,5));

let cat = {
    firstName: 'Charlie',
    lastName: 'Cat',
    favToy: 'ball',
    weight: 6.5,
    isFed: function(){
        return false;
    }
}

//  console.log (cat.firstName);

//  console.log(cat.isFed())



 


//  exercise
// 1

 function person(firstName, lastName){
    return firstName + lastName;
 }

 console.log(person('Maria ', 'Otelea'));

//  2

 function calculate(l, L){
    return l * L
 }

 console.log(calculate(2,5));

//  3

function distance (time, speed){
    return speed * time
}

console.log ("You have travelled: " + distance(2,5) + "km");

// 4

let calculator = {
    firstName: 'Maria',
    isCalculated:  calculate(9, 5),
    isDistanced: distance(10, 6),
    isOwned: person('Maria ', 'Otelea')
    }



console.log(calculator.isCalculated);
console.log(calculator.isDistanced);
console.log(calculator.isOwned);

let cats = new Cat("Mia", 10, "pink");
console.log (cats.meow());
