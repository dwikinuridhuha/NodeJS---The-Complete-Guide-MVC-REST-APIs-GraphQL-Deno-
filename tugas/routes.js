import { writeFile } from "fs";

export function requestResponseHandler(req, res) {
  const { headers, url, method } = req;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'>");
    res.write("<head><title>Hello</title></head>");
    res.write(
      "<body>" +
        "<a href='http://localhost:3000/users'>users</a> <br/> " +
        "<form action='/create-user' method='post'><input type='text' name='username'></input><button type='submit'>Send</button></form>" +
        "</body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'>");
    res.write("<head><title>Hello</title></head>");
    res.write(
      "<body><ul><li>User 1</li></ul><br/><a href='http://localhost:3000'>Home</a> </body>",
    );
    res.write("</html>");
    res.end();
    return;
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const parserBody = Buffer.concat(body).toString();
      console.log(parserBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html lang='en'>");
  res.write("<head><title>Hello</title></head>");
  res.write("<body><h1>404 page not found</h1></body>");
  res.write("</html>");
  res.end();
}
