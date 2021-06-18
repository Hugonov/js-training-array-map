/*global arr*/

function doubleNumbers(arr){
  let double = arr.map(num => num * 2);
  return double;
}
console.log(doubleNumbers([2, 5, 100])); 
// [4, 10, 200]

function stringItUp(arr){
  let stringmaker = arr.map(num => num.toString());
  return stringmaker;
}
console.log(stringItUp([2, 5, 100])); 
// ["2", "5", "100"]

function capitalizeNames(arr){
  let string = arr.map(string => string.toLowerCase());
  let string2 = string.map(string => string.charAt(0).toUpperCase() + string.slice(1));
  return string2;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

function namesOnly(arr){
  return arr.map(fullname => fullname.name);
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr){
  let matrix = arr.map(age => {
    if (age.age >= 18) {
      return age.name + ' goes to the Matrix ^^';
    } else {
      return age.name + ' is under age TT';
    }
  });
  return matrix;
}
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// Version Ternaire

// x.age >= 18 ? ${x.name} can go to The Matrix : ${x.name} is under age;

function readyToPutInTheDOM(arr){
  let title = arr.map(arr => '<h1>'+arr.name+'</h1>'+'<h2>'+arr.age+'</h2>');
    return title;
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
