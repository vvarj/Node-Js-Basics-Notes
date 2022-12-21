const http = require("http");
const server = http.createServer((req, res) => {
  //   res.write("Hello World !!");
  //   res.end();

  if (req.url === "/") {
    res.write("Hello World from node JS !!");
    res.end();
  } else {
    res.write("Page not found");
    res.end();
  }
});

server.listen(3000);
