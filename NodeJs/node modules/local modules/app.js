// ##  Local Module || User Module ##

// use common js => require()

// const logger = require("./logger");

// logger.sayHello("User Abdelmagid");
// logger.log("test");

// let sum = logger.add(50, 10);
// console.log("Result", sum);

// ** 1-Compare use let or const variable **
// use Let var
// let logger = require("./logger");
// logger = 1; //override
// logger.log("Hello Migo"); //TypeError: logger.log is not a function

// use const var
// const logger = require("./logger");
// logger = 1; //override
// logger.log("Hello Migo"); //TypeError: Assignment to constant variable.

//** 2-Module Caching **

// const logger = require("./logger");
// delete require.cache[
//   "F:\\NodeJs Bootcamp\\NodeJs\\node modules\\local modules\\logger.js"
// ];
// const logger1 = require("./logger");

// const logger2 = require("./logger");

// console.log(require.cache);

// ## 3-Common JS Modules & ECMAScript Modules ##

// >= Common Js Modules
// - Syntax :
// -require() method to import module or library.
// -module.exports || exports obj to exports from any module.

// const logger = require("./logger");
// logger.sayHello("User Abdelmagid");
// logger.log("test");

// >= ECMAScript Modules  (ESM)
// - Syntax:
// -import {fun,var,obj,class} from "path" to use import module or library.
// -export + fun,obj,class to use  exports from any module.
// -Note : to use import &export to node js to make files extension .mjs
// or on file package.json to make "type"="module"

import { log, sayHello, test } from "./logger.js";

sayHello("User Abdelmagid");
log("test");
test();
