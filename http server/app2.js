// serving static files

const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./static/index.html");

    res.writeHead(200, { "Content-type": "text/html" });

    // res.writeHead(200, { "Content-type": "application/json" });
    // res.writeHead(200, { "Content-type": "image/jpg" });

    readStream.pipe(res);
  })
  .listen(3000);
