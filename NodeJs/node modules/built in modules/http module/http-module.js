// ## HTTP Module ##

// ## Create HTTP Server ##

import http from "http";

// // Very Low Level
// const server = http.createServer();
// server.on("connection", (Socket) => {
//   console.log("New Connection......");
// });

// // //Listen to the request event
// server.on("request", (req, res) => {
//   if (req.url === "/") {
//     res.end("Requested Successfully and this a Response ");
//   }
// });
// server.listen(3000);

// hostName => localhost >= 127.0.0.1
// port => 3000
// server.listen(port,hostName(optional),()=>{})

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/" && req.method === "GET") {
    res.write("Home Page");
    res.end();
  }
  if (req.url === "/api/courses" && req.method === "GET") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Listening on Port 3001....");
});
