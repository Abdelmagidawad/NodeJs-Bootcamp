// 🔹 Exercise 2: Serve JSON Data
// 👉 Task:
// Create a route /users that responds with a JSON array of user objects:
// [
//   { "id": 1, "name": "Ali" },
//   { "id": 2, "name": "Sara" }
// ]
// Use JSON.stringify() before sending the response.

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.write(
      JSON.stringify([
        { id: 1, name: "Ali" },
        { id: 2, name: "Sara" },
      ])
    );
  } else {
    res.statusCode = 404;
    res.write("404 Not Found");
  }
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000!");
});
