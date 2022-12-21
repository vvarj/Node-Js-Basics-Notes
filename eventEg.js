// events module will give a class
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//event listner - arg (event-listner,func to execute)
eventEmitter.on("tutorial", () => {
  console.log("tutorial event occured!!");
});

eventEmitter.on("sum", (num1, num2) => {
  console.log("Sum=" + (num1 + num2));
});

// emit event
eventEmitter.emit("tutorial");
eventEmitter.emit("sum", 8, 12);

/////////////////////////////////////////////////////////////////////////////

//Event using custom object
class Person extends EventEmitter {
  constructor(name) {
    //helps to call "this" property
    super();
    this._name = name;
  }
  // getter
  get name() {
    return this._name;
  }
}

let arjun = new Person("Arjun");
let remya = new Person("Remya");

remya.on("name", () => {
  console.log("My name is " + remya.name);
});

arjun.on("name", () => {
  console.log("My name is " + arjun.name);
});

//emit synchronusly !!
arjun.emit("name");
remya.emit("name");
