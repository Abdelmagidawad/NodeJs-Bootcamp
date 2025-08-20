// ##  Built in Modules on Node JS ##
//Core modules on NodeJs => os => fs => events => http

// *** OS Module ***

const os = require("os");

let totalMemory = os.totalmem();
console.log(`totalMemory: ${totalMemory}`);

let freeMemory = os.freemem();
console.log(`freeMemory: ${freeMemory}`);

let userInfo = os.userInfo("ABDELMAGID");
console.log(userInfo);

let userArch = os.arch();
console.log(userArch); //x64

let userHomeDirectory = os.homedir();
console.log(userHomeDirectory); //C:\Users\abdelmagid

let hostName = os.hostname();
console.log(hostName); //DESKTOP-FNK3C2O

let plateForm = os.platform();
console.log(plateForm); //win32
