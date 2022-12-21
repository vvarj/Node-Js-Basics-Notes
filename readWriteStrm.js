const fs = require("fs");
const readStream = fs.createReadStream("./eg.txt", "utf-8");
const writeStream = fs.createWriteStream("./eg2.txt");
readStream.on("data", (chunk) => {
  console.log(chunk);
  writeStream.write(chunk);
});

// chunk help to manupulate or do with the data without loading the entire file . Used for large file to read
