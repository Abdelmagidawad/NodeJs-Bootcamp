// ##  Built in Modules on Node JS ##
//Core modules on NodeJs => os => fs => events => http

//*** path module ***
const path = require("node:path");

let pathObj = path.parse(__filename);

console.log(pathObj);

let dirName = path.dirname(__filename);

console.log(dirName);
