// 🔹Exercise 8 : github repos cli (Mini Project)

// 👉 Task:
// Create a Node.js CLI application that uses GitHub API to get the repositories of a single user.

// The application should take the username from the user input in the console, then call GitHub API to get the repositories of this user.
// Then store the repository names in a file "USERNAME.txt".

// GitHub API Endpoint:
// https://api.github.com/users/USERNAME/repos

// // 💡 Hint: Run the app => node index.js USERNAME

import http from "http";
import fs from "fs";

const userName = process.argv[2];

if (!userName) {
  console.log("Please provide a GitHub username!");
  process.exit(1);
}

const url = `https://api.github.com/users/${userName}/repos`;

// Fetch repos
const getRepos = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("User not found");

    const repos = await response.json();
    const repoNames = repos.map((repo) => repo.name).join("\n");

    fs.writeFile(`./${userName}.txt`, repoNames, (err) => {
      if (err) console.log("Error Write Repos Name on file", err);

      console.log(`Repositories saved to ${userName}.txt`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

getRepos();
