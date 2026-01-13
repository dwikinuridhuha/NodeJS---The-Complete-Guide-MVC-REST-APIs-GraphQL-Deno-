import { createServer } from "http";
// import { requestResponseHandler } from "./routes.js";
import { requestResponseHandler } from "./tugas/routes.js";

const server = createServer(requestResponseHandler);

server.listen(3000);
