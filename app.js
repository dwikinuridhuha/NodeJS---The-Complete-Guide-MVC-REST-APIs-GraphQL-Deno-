import { createServer } from "http";

const server = createServer(function (req, res) {
  const { headers, url, method } = req;
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html lang='en'>");
  res.write("<head><title>Hello</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
