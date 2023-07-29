import express, { Request, Response, request, response } from "express";
import config from "config";
import routes from "./routes";
import logger from "./utils/logger";
const port = config.get<number>("port");
const app = express();
app.use(express.json());

app.listen(port, async () => {
  
  logger.info(`App is running at http://localhost:${port}`);
  routes(app);
});
