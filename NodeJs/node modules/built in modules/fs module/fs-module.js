// ##  Built in Modules on Node JS ##
//Core modules on NodeJs => os => fs => events => http

// *** File System Module  ***

const fs = require("node:fs");

// Synchronous Method
const files = fs.readdirSync("./");
console.log(files);

// Asynchronous Method
fs.readdir("./", (err, files) => {
  if (err) console.log(`Error=> ${err}`);
  console.log("Result=>", files);
});

//** Read to File **

// Use Encode => utf8 or utf-8

// => readFileSync(path,Encode=> utf8) => Synchronous
// let fileContent = fs.readFileSync("./data.txt"); //use without encode(utf8)
// let fileContent = fs.readFileSync("./data.txt", "utf8");
// console.log("File Content \n", fileContent);

// => readFile(path,Encode=>utf8,callback fun) =>Asynchronous ,to use read data from file
// Encode => utf8

// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) console.log("Error reading File", err);
//   console.log("File Content =>", data);
// });

// =>Blocking & non-Blocking && Synchronous & Asynchronous

// =>Blocking & Synchronous Code
// console.log("First");
// console.log(fs.readFileSync("./data.txt", "utf8"));
// console.log("Second");

// =>non-Blocking & Asynchronous Code
// console.log("First");
// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   if (err) console.log("Error reading this file", err);
//   console.log("File Content =>", data);
// });
// console.log("Second");

// Mixing blocking &non-blocking
// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) console.log("Error reading this file", err);
//   console.log("File Content =>", data);

//   fs.unlink("./data.txt", (err) => {
//     if (err) console.log("Error deleting this file", err);
//   });
// });

//** Write to File **

// => writeFile(path,data add,callback fun) => remove file old content and add data new only

// fs.writeFile("./user.json", JSON.stringify([{ id: 2, name: "Ali" }]), (err) => {
//   if (err) console.log("Error writing this file", err);
//   console.log("Done");
// });

// =>appendFile(path,data add,callback fun) => add data on file content without replaced old data
// fs.appendFile(
//   "./user.json",
//   JSON.stringify({ id: 1, name: "Ahmed" }),
//   (err) => {
//     if (err) console.log("Error writing this file", err);
//     console.log("Done");
//   }
// );

//** Delete File **

// => unlink(path,callback fun) to use remove file

// fs.unlink("./user.json", (err) => {
//   if (err) console.log("Error Removing this file", err);
//   console.log("Deleted Successfully");
// });

//** Check File Exist **
// => existsSync(path) => to check file exist or not

if (fs.existsSync("./user.json")) {
  fs.readFile("./user.json", "utf8", (err, content) => {
    if (err) console.log("Error", err);
    console.log("File Content =>", content);
  });
} else {
  console.log("No File user Exist");
}

// ** Charset-Encoding-Buffers **

// => Charset-Encoding(utf8)
// fs.readFile("./data.txt", (err, data) => {
//   if (err) console.log("Error Reading this File", err);
//   console.log("File Content ", data);
// });

// output=> <Buffer 48 69 2c 20 6d 79 20 6e 61 6d 65 20 41 62 64 65 6c ....>

// 1 =>0001 binary
// 2 =>0010 binary
// 3 =>0011 binary
// or litter "a" => 97
console.log("a".charCodeAt()); //97
console.log(Buffer.from("a").toJSON()); //{ type: 'Buffer', data: [ 97 ] }

// => Buffers
// Buffer objects are used to represent a fixed-length sequence of bytes.
// Many Node.js APIs support Buffers.

console.log(Buffer.from("hello", "utf8")); //output=> <Buffer 68 65 6c 6c 6f>
