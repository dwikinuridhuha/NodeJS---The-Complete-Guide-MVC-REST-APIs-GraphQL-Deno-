import { createServer } from "http";

const server = createServer(function (req, res) {
  const { headers, url, method } = req;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'>");
    res.write("<head><title>Hello</title></head>");
    res.write(
      "<body><form action='/message' method='post'><input type='text' name='message'></input><button type='submit'>Send</button></form></body>",
    );
    res.write("</html>");
    res.end();
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html lang='en'>");
  res.write("<head><title>Hello</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
