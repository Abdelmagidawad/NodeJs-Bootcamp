// 🔹 Exercise 5: Serve Static Files

// 👉 Task:
// Create a route /home that serves an index.html file.
// Create a route /style that serves a style.css file.
// (Bonus: serve images or other files too).
// 💡 Hint: Use the fs module (require("fs")).

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    fs.readFile("./views/index.html", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading index.html");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("./views/style.css", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading style.css");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === "/Function&method.png") {
    fs.readFile("./views/Function&method.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading Function&method.png");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen("5000", "localhost", () => {
  console.log("Listening on Port 5000!");
});
