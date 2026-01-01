import { createServer } from "http";

const server = createServer(function (req, res) {
  console.log(req.url, req.method, req.headers);
});

server.listen(3000);
