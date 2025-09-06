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

//**Create and Publish CIL Tool

// => process refer to current process to this current app
// => argv refer to command-line arguments passed user

// console.log(process.argv);
// returns an array containing the command-line arguments passed when the Node.js process

// if (process.argv[2] === "add") {
//   console.log("you are going to add course with name", process.argv[3]);
// }

// commander.js Package => is used to create command-line interfaces easily and efficiently.

import { Command } from "commander";
const program = new Command();

// program
//   .name("cli-courses-manager")
//   .description("cli to make courses")
//   .version("1.0.0");

// program
//   .command("add")
//   .alias("a")
//   .description("Add a new course")
//   .argument("<title>", "add course title")
//   .option("--price <price>", "add course price")
//   .action((title, option) => {
//     console.log("Param=>", title, "Option=>", option);
//   });

// program
//   .command("list")
//   .alias("l")
//   .description("List all courses")
//   .action(() => {
//     console.log("All Courses");
//   });

// program.parse(process.argv);

// *** ###

// inquirer.js Package => is  a collection of common interactive command line user interfaces.

// syntax=>
// inquirer
// .prompt([
//     /* Pass your questions in here */
// ])
// .then((answers)=>{
//      // Use user feedback for... whatever!!
// })
// .catch((err)=>{})

import inquirer from "inquirer";

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "programming",
//       message: "what is your favorite programming language",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

//=> When use command add to ask a title course and price

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please Enter Course Title",
  },
  {
    type: "number",
    name: "price",
    message: "Please Enter Course Price",
  },
];

program
  .name("cli-courses-manager")
  .description("cli to make courses")
  .version("1.0.0");
//
import fs from "fs";
//
program
  .command("add")
  .alias("a")
  .description("Add a new course")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      // console.log(answers);
      //
      if (fs.existsSync("./courses.json")) {
        fs.readFile("./courses.json", "utf8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          const content = JSON.parse(fileContent);
          content.push(answers);
          fs.writeFile("./courses.json", JSON.stringify(content), (err) => {
            if (err) console.log(err);
            console.log("Add Course Done");
          });
        });
      } else {
        fs.writeFile("./courses.json", JSON.stringify([answers]), () => {
          console.log("Add Course Done");
        });
      }
      //
    });
  });

program.parse(process.argv);
