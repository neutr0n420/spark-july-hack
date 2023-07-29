import express, { Request, Response, request, response } from "express";
import config from "config";
import routes from "./routes";
import logger from "./utils/logger";
import SQL from "./utils/connect"
import RedisClient from "./utils/redis";
const port = config.get<number>("port");
const app = express();
app.use(express.json());
RedisClient()
app.listen(port, async () => {
  
  logger.info(`App is running at http://localhost:${port}`);
  routes(app);
});
