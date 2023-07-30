import { Express, Request, Response } from "express";
import SQL from "./utils/connect";
import { CreateClient } from "./utils/redis";
import { nanoid } from "nanoid";

type user = {
  email: string;
  name: string;
};

function routes(app: Express) {
  //Check's the server is working fine or not
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/users", async (req: Request, res: Response) => {
    const getResult = await SQL`select * from users`;
    res.json(getResult);
  });

  // Add the user with the name and it's email
  app.post("/api/users", async (req: Request, res: Response) => {
    const { email, name }: user = req.body;
    const newObj =
      await SQL`insert into users(name ,email) values (${name} , ${email}) RETURNING *;`;
    res.json(`User added with ID: ${newObj[0].id}`);
  });

  //Convert the shortned url into to orignal URL using Redis
  // app.get("/api/:id", async (req: Request, res: Response) => {
  //   const id = req.params.url;

  //   // database instance
  //   const r = CreateClient();
  //   await r.connect();

  //   const count = await r.hGet(id, "count");
  //   if (count && Number(count) !== 0) {
  //     res.status(404).send("URL is inaccessible");
  //     await r.disconnect();
  //     return;
  //   }

  //   //Getting the Value from the key value pair

  //   await r.disconnect();
  // });

  // Shorten endpoint
  // app.post("/api/shorten", async (req: Request, res: Response) => {
  //   const body = req.body;
  //   const url: string = body.url;
  //   const count = 0;

  //   if (!url) {
  //     res.status(400).json({ error: "URL is required" });
  //   }

  //   // database instance
  //   const r = CreateClient();
  //   await r.connect();

  //   // generate randoms short id
  //   const id = nanoid();

  //   const rHash = {
  //     url,
  //     count,
  //   };

  //   // set custom id to the original url
  //   await r.hSet(id, rHash);

  //   res.status(200).json({ url, id, accessedCount: count });

  //   await r.disconnect();
  // });
}

export default routes;
