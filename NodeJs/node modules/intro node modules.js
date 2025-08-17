// ## Node Modules ##

// ## 1.Node Module System

console.log("Hello Lesson Two"); //global Scope

// This method in Standard JavaScript core
// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// global Scope

// window => window is not defined in Node.js

// Node => globalThis obj replaced window obj
console.log(globalThis);
globalThis.console.log("test global this obj");

globalThis.setTimeout(() => {
  console.log("test global scope with setTimeout");
}, 1000);

// variables,functions to declared not added globalThis obj(global scope)
let myVarL = "Abdelmagid";
console.log(globalThis.myVarL); //undefined

var myVarV = "Awad";
console.log(globalThis.myVarV); //undefined

function testGlobalScope() {
  console.log("test Fun global scope");
}

globalThis.testGlobalScope;

// ## 2. Node Modules

console.log(module);

// Module => the pice of code to write it and make reusability

// Type of Modules
// -Local/User Module
// -Built in Module
// -NPM Module
