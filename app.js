import { createServer } from "http";

const server = createServer(function (req, res) {
  console.log(req);
});

server.listen(3000);
