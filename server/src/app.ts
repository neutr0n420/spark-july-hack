import express, { Request, Response } from "express";
import config from "config";
import routes from "./routes";
import logger from "./utils/logger";
import SQL from './utils/connect'
const port = config.get<number>("port");
const postgres = require('postgres')
const app = express();
app.use(express.json());

app.listen(port, async () => {
  
  logger.info(`App is running at http://localhost:${port}`);
  // const result = await SQL`CREATE TABLE my_table AS SELECT now()`
  const getResult = await SQL`SELECT * FROM users;`
  console.log(getResult)
  // connect to database
  // await connect();

  routes(app);
});
