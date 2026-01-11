import { writeFile } from "fs";

export function requestResponseHandler(req, res) {
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
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const parserBody = Buffer.concat(body).toString();
      console.log(parserBody);
      writeFile("message.txt", parserBody, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html lang='en'>");
  res.write("<head><title>Hello</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
}
