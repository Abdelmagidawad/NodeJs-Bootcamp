// Exercise 7 : cloud calculator
// 👉 Task:
// Your task is to implement a cloud calculator using the HTTP module
// the request url form will be: /[operation]?a=[num1]&b=[num2]

// the calculator must have the following operations
// add: send a + b
// subtract: send a - b
// multiply: send a * b
// divide: send a / b

import http from "http";
import url from "url";
const server = http.createServer((req, res) => {
  let rout = url.parse(req.url, true);
  let a = +rout.query.a;
  let b = +rout.query.b;
  if (rout.pathname === "/add") {
    if (a && b) {
      res.statusCode = 200;
      res.end(`response of add => ${a + b}`);
    } else {
      res.statusCode = 404;
      res.end("query params not completed");
    }
  } else if (rout.pathname === "/subtract") {
    if (a && b) {
      res.statusCode = 200;
      res.end(`response of subtract => ${a - b}`);
    } else {
      res.statusCode = 404;
      res.end("query params not completed");
    }
  } else if (rout.pathname === "/multiply") {
    if (a && b) {
      res.statusCode = 200;
      res.end(`response of multiply => ${a * b}`);
    } else {
      res.statusCode = 404;
      res.end("query params not completed");
    }
  } else if (rout.pathname === "/divide") {
    if (a && b) {
      res.statusCode = 200;
      res.end(`response of divide => ${a / b}`);
    } else {
      res.statusCode = 404;
      res.end("query params not completed");
    }
  } else {
    res.statusCode = 404;
    res.end("404 Not Found ");
  }
});

server.listen("3000", "localhost", () => {
  console.log("Listening on Port 3000!");
});
