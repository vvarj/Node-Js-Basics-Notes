const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your age? ", (age) => {
  console.log("Your age is: " + age);
});
