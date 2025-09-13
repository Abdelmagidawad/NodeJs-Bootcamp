// ** Callback & Event loop **

// fs.readFile("path","Utf8",()=>{
//   // this Callback fun
// })

// =>Types of callbacks
// - crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {//callback})
// - fetch("path").then(() => {//callback});
// - setTimeout(()=>{//callback},0); etc......

// ** CallStack & Callback queue **

import fs from "fs";
console.log("Start Code");
fs.readFile("./data.txt", "utf-8", (err, fileContent) => {
  if (err) console.log("Error =>", err);
  console.log("File Content =>", fileContent);
});
setTimeout(() => {
  console.log("Set Time Out callback");
}, 0);
console.log("End Code");

// OutPut
// Start
// End
// Set Time Out callback
// File Content =>......

// ** Callback Phases **

// queue consist of phases => timer callback, pending callback, poll callback, check callback, close callback
// event loop it walk in each of their phases and tack callback from phase to put it a callstack to be execution.

// =>Order Of Queue Phases

// 1=>Timers → (setTimeout / setInterval)
// 2=>Pending Callbacks
// 3=>Idle, Prepare
// 4=>Poll → (I/O events)
// 5=>Check → (setImmediate)
// 6=>Close Callbacks =>like close events

// The Event Loop goes through them one by one in a specific order.

setTimeout(() => console.log("timeout"), 0); //Timers queue
setImmediate(() => console.log("immediate")); //Check queue

console.log("start");

// output
// start
// immediate
// timeout
