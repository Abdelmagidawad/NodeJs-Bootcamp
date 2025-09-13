// ** LibUV **

// libuv => is a cross platform open source library written in C language with a focus on Asynchronous I/O.
// why use libuv? => to handles asynchronous / non-blocking operations in NodeJs.
// how? => using :thread pool & event loop.

import fs from "fs";

// Flow Synchronous Code

console.log("First");
const fileContent = fs.readFileSync("./data.txt", "utf-8");
console.log("File Content IS ", fileContent);
console.log("Second");

// OutPut=>
// First
// File Content .....
// Second

// Flow Asynchronous Code

console.log("First Code");
fs.readFile("./data.txt", "utf-8", (err, fileContent) => {
  if (err) {
    console.log("Error =>", err);
    process.exit();
  }
  console.log("File Content => ", fileContent);
});
console.log("Second Code");

// OutPut=>
// First Code
// Second Code
// File Content .....
