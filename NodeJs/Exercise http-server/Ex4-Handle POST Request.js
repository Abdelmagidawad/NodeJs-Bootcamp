// 🔹 Exercise 4: Handle POST Request
// 👉 Task:
// Create a route /submit that accepts a POST request.
// Collect data from the request body (e.g., JSON { "message": "Hello Server" }).
// Respond back with "You sent: Hello Server".
// 💡 Hint: Use req.on("data") and req.on("end").

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/submit" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      let data = JSON.parse(body);
      res.end(`You sent: ${data.message}`);
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000!");
});
