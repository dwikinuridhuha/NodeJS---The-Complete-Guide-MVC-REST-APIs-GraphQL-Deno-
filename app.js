import { createServer } from "http";

const server = createServer(function (req, res) {
  const { headers, url, method } = req;
  console.log({ headers, url, method });
});

server.listen(3000);
