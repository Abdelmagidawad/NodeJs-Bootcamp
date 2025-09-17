// 🔹 Exercise 3: Handle Query Parameters
// 👉 Task:
// Create a route /greet?name=Ali that responds with:
// Hello, Ali!
// If no name is provided, respond with "Hello, Guest!".
// 💡 Hint: Use the url module (require("url")) to parse query strings.

import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  //Parse the URL (true => also parse query as object)
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname; // /greet
  const query = parseUrl.query; //like=> ?name=Ali
  if (path === "/greet") {
    let name = query.name || "Guest";
    res.write(`Hello, ${name}!`);
  } else {
    res.statusCode = 404;
    res.write("Route not found");
  }
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000!");
});
