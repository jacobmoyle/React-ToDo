// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1,2));
//
// var toAdd = [10,5,5,6];
// console.log(add(...toAdd))
//
//
// var groupA = ['Chris', 'Victor'];
// var groupB = ['Sage'];
//
// var final = [...groupA, ...groupB]
//
// console.log(final)

var person = ['Matt', 30];
var personTwo = ['Jacky', 40];

function hello(name, age) {
  console.log("Hi " + name + " you are " + age)
};

hello(...person);
hello(...personTwo);

[...person, ...personTwo].forEach(function (thing) {
  console.log(thing);
});
