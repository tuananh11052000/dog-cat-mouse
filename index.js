let Dog = require('./Dog.js');
let Cat = require('./Cat.js');
let Mouse = require('./Mouse.js');

let dog = new Dog("rec");
let cat = new Cat();

dog.eat(cat);

console.log(dog);