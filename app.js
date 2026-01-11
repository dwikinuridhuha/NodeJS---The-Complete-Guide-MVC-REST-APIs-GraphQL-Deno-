import { createServer } from "http";
import { requestResponseHandler } from "./routes.js";

const server = createServer(requestResponseHandler);

server.listen(3000);
