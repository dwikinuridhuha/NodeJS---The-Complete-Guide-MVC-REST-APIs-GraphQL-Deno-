import { createServer } from "http";

const server = createServer(function (req, res) {
  console.log(req);
  process.exit();
});

server.listen(3000);
