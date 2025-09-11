const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log("Message Logger", message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "https:\\" });
  }
}

module.exports = Logger;

// console.log(__filename);
// console.log(__dirname);
