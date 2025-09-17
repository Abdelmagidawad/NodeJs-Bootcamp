// ## some practical exercises on http server (HTTP Module) ##

// 🔹 Exercise 1: Simple Routing

// 👉 Task: Create a server that handles the following routes:

// / → Respond with "Welcome to my Node.js server!"

// /about → Respond with "This is the about page."

// /contact → Respond with "Contact me at example@email.com"

// Any other route → Respond with "404 Page Not Found"

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to my Node.js server!");
  } else if (req.url === "/about") {
    res.write("This is the about page.");
  } else if (req.url === "/contact") {
    res.write("Contact me at example@email.com");
  } else {
    res.statusCode = 404;
    res.write("404 Page Not Found");
  }
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000!");
});
