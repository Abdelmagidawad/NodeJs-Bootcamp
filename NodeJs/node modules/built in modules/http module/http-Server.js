// ** More About HTTP Server **

import http from "http";

// Status Code (http status code)

// HTTP response status codes are grouped in five classes =>

// 1- Informational responses (100-199)
// 2- Successful responses (200-299)
// 3- Redirection message (300-399)
// 4- Client error responses (400-499) => error frontend
// 5- Server error responses (500-599) =>error backend

// Important of Status Code

// => 200 OK =>request succeeded
// => 201 Created

// => 400 Bad Request
// => 401 Unauthorized
// => 404 Not Found
// => 405 Method Not Allowed

// =>500 Internal Server error
// =>502 Bad Gateway
// =>503 Service Unavailable

// //Response HTML
// const server = http.createServer((req, res) => {
//   res.write("<h1>Hello World</h1>");
//   res.end();
// });

// //Response Json
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.write(JSON.stringify({ id: 1, name: "Migo" }));
//   res.end();
// });
// server.listen(5000, "localhost", () => {
//   console.log("Listening on port 5000");
// });

// Routing System
import fs from "fs";
const homePage = fs.readFileSync("./views/index.html", "utf8");
const cssFile = fs.readFileSync("./views/style.css", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write(homePage);
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
  } else if (req.url === "/style.css") {
    res.write(cssFile);
  } else {
    res.statusCode = 404;
    res.write("<h1>Not Found Page</h1>");
  }
  res.end();
});

server.listen(5000, () => {
  console.log("Listening on port 5000");
});
