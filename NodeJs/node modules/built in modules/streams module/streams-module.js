//  ## Streams Module ##

//=> Streams [readable -writable]

const fs = require("fs");

// readable stream
// >= fs.createReadStream(path,options(utf8))

const rStream = fs.createReadStream("./data.txt", "utf8");
rStream.on("data", (chunk) => {
  console.log("*****chunk*****");
  console.log(chunk);
});

//writable Stream
// =>fs.createWriteStream(path,options(utf8))
const wStream = fs.createWriteStream("stream.txt", "utf8");
rStream.on("data", (chunk) => {
  wStream.write("\n *****chunk***** \n");
  wStream.write(chunk);
});
