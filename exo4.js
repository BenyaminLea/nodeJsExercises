const http = require("http");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
  let filePath;

  console.log(req.url);
  switch (req.url) {
    case "/home":
      filePath = "./exo4/index.html";
      break;
    case "/about":
      filePath = "./exo4/about.html";
      break;
    default:
      filePath = "./exo4/404.html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
