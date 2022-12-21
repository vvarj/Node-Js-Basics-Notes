const max = 10;
const min = 1;

// Getting a random number between two values
let rand1 = Math.random() * (max - min) + min;

// Getting a random integer between two values
let rand2 = Math.floor(Math.random() * (max - min) + min);

console.log(rand1);
console.log(rand2);
