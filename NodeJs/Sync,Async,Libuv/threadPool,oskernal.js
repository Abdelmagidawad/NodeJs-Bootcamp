// ** Thread Pool **

import crypto from "crypto";

const start = performance.now();

// To use Synchronous from pbkdf2Sync()
crypto.pbkdf2Sync("start", "salt", 100000, 64, "sha512");
console.log("End of PBKDF2 ms =>", performance.now() - start);

crypto.pbkdf2Sync("start", "salt", 100000, 64, "sha512");
console.log("End of PBKDF2 ms =>", performance.now() - start);

crypto.pbkdf2Sync("start", "salt", 100000, 64, "sha512");
console.log("End of PBKDF2 ms =>", performance.now() - start);

// To use Asynchronous from pbkdf2()
// to increase size of thread pool =>use this var => UV_THREADPOOL_SIZE,but maximum=1024

// use this to know threads pf cpu
import os from "os";
console.log(os.cpus().length);

process.env.UV_THREADPOOL_SIZE = 5;
crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms =>", performance.now() - start);
});
crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms =>", performance.now() - start);
});
crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms =>", performance.now() - start);
});
crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms =>", performance.now() - start);
});
crypto.pbkdf2("start", "salt", 100000, 64, "sha512", () => {
  console.log("End of PBKDF2 ms =>", performance.now() - start);
});

// ** OS Kernals **

fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ms =>", performance.now() - start);
});
