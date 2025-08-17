// Course NodeJs , Express , MongoDB

// ##  Introduction NodeJs ##

//## 1. What is NodeJs?

// # NodeJs A runtime environment for executing JavaScript code outSide of a browser.
// # NodeJs Is an open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
// # NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used to build scalable network applications. It is used

// *** First Node App ***
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Abdelmagid");

//## 2. What Can We do with Node js?

// - Back-end Services
// - Real-Times Apps (socket.io)
// - Games

// ## 3. Node REPL => Read ,Eval ,Print ,Loop || Node Shell

// Write node only in terminal and test any thing
// ex:
// >1+1 =>this read&evaluate
// 2    =>this print
// >    =>this loop

// ## 4. Browser VS NodeJs

// console.log(window); //window is not defined in NodeJs

console.log(this); //reference to global obj
console.log(__filename);
console.log(__dirname);
