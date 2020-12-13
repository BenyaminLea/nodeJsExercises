const http = require("http");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  fs.readFile("./exo3.txt", (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
