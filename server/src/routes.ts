import { Express, Request, Response } from "express";
import SQL from "./utils/connect";
import { CreateClient } from "./utils/redis";
import { nanoid } from "nanoid";

type temp = {
  email: string;
  name: string;
};

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/", async (req: Request, res: Response) => {
    const getResult = await SQL`select * from users`;
    res.json(getResult);
  });

  app.post("/api/add", async (req: Request, res: Response) => {
    const { email, name }: temp = req.body;
    const newObj =
      await SQL`insert into users(name ,email) values (${name} , ${email}) RETURNING *;`;
    res.json(`User added with ID: ${newObj[0].id}`);
  });
  app.get("/api/:url", async (req: Request, res: Response) => {
    const client = CreateClient();
    await client.connect();

    const originalUrl: string | null = await client.get(req.params.url);
    if (originalUrl) {
      res.redirect(originalUrl);
    }
    res.status(404).send("Enter valid URL!");
  });
  app.post("/api/add", async (req: Request, res: Response) => {
    const { email, name }: temp = req.body;
    const newObj =
      await SQL`insert into users(name ,email) values (${name} , ${email}) RETURNING *;`;
    res.json(`User added with ID: ${newObj[0].id}`);
  });

  // Shorten endpoint
  app.post("/api/shorten", async (req: Request, res: Response) => {
    const { url } = req.body;
    if (!url) {
      res.status(400).json({ error: "URL is required" });
    }
    // database instance
    const r = CreateClient();
    await r.connect();

    // generate randoms short id
    const id = nanoid();

    // set custom id to the original url
    await r.set(id, url);

    res.status(200).json({ url, id });
  });
}

export default routes;
