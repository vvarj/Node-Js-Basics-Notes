// To read user input

const readline = require("readline");
// create instance of readline interface using create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`What is ${num1}+${num2} ? \n`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    //re prompt
    rl.setPrompt("Incorret Response Please try again \n");
    rl.prompt();
    // line is its own event
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Your answer ${userInput} is incorrect try again \n`);
        rl.prompt();
      }
    });
  }
});

//readline interface actually an instance of event emitter class

rl.on("close", () => {
  console.log("Correct !!!");
});

// Another example:

// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("What is your age? ", (age) => {
//   console.log("Your age is: " + age);
// });
