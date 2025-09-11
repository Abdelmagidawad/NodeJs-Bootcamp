// *** Events Module  ***

const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a Listener
// emitter.addListener(event Name,callback fun) to register an event
emitter.on("messageLogged1", () => {
  console.log("Listener Called! Event One");
});

//raise an Event
// emitter.emit(event Name) to raise an event
emitter.emit("messageLogged1");

// //*** Event Arguments
// // Register a Listener
emitter.on("messageLogged2", (arg) => {
  console.log("Listener Called! Event Two", arg);
  console.log("Listener Called! Event Two", arg.id);
});
//Raise an event
emitter.emit("messageLogged2", { id: 1, url: "https:\\" });

//*** Challenge Event Module
//Raise event: Logging {data: message}

// register a Listener
emitter.on("logging", (arg) => {
  console.log(`Hello User => ${arg}`);
});
// Raise an event
emitter.emit("logging", "Login Successfully");

// *** Extending EventEmitter  ***

// //const EventEmitter = require("events"); //Don`t use this class,but use class Logger to extends from EventEmitter class

const Logger = require("./logger");
const logger = new Logger();

//Register a Listener
logger.on("messageLogged", (arg) => {
  console.log("Listener Called!", arg);
  console.log("Listener Called!", arg.id);
});

logger.log("Test Message!");
