// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {});

// console.log(__filename);
// console.log(__dirname);

// console.log(module);  //this is obj module

function sayHello(message) {
  console.log("this is welcome message ", message);
}

function log(message) {
  console.log("this is message from logger", message);
}

//** use common js => exports

// module.exports = log; //exports one item =>function log
//exports many items
// module.exports = {
//   sayHello,
//   log,
// };

// exports is a reference to module.exports
// exports.log = log;
// exports.add = (n1, n2) => {
//   return n1 + n2;
// };

//** Module Caching **
// console.log("This is Logger file module");

//** use ECMAScript Modules => export
export function test() {
  console.log("To test this ES Modules");
}

export { log, sayHello };
