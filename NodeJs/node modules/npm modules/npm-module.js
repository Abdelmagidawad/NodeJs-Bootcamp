//  ## NPM (node package manager) ##

//**Important npm commands

// 1- npm init || npm init -y         =>to initialize npm on project
// 2- npm run <script>                =>to run any script to write it npm scripts
// 3- npm install -g <package>        =>to install packages globally
//|| npm install <package> --save     =>to install packages in project
//|| npm install <package> --save-dev =>to install packages in development only
//|| npm install                      =>to install all packages in project
// 4- npm uninstall <package>         => to uninstall any package
// 5- npm update                      =>to updates all packages in projects
// 6- npm list                        =>to list all packages in project
// 7- npm cache clean --force         =>to clean cache,if problems in upload packages

// nodemon package (Automatic restarting of node application when file changes)=>reload, automatically and restart your server.
// Swap nodemon instead of node to run your code

// use this command to install nodemon package
//=> npm install nodemon --save-dev

console.log("Use nodemon package");
console.log("Welcome user Abdelmagid");

//** Create NPM first project simple-otp-project-12 package and upload.
//  it to npm registry

// Two command use it when upload package on npm registry
// 1-npm login   => to go npm account
// 2-npm publish => to upload package code on npm registry

//** import npm module => simple-otp-project-12
// use this command to install simple-otp-project-12 package

import { generateOTP } from "simple-otp-project-12";

console.log(generateOTP());
console.log(generateOTP(5));
console.log(generateOTP(10, { chars: true }));
