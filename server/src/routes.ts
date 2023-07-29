import { Express, Request, Response, response } from "express";
import SQL from "./utils/connect";

type temp = {
  email: string 
  name: string
}

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get('/', async (request , response) => {const getResult = await SQL`select * from users`;response.json(getResult);})

  app.post('/api/add', async(req: Request , res: Response) => {
  const {email , name} : temp = req.body
    const newObj = await SQL`insert into users(name ,email) values (${name} , ${email}) RETURNING *;`
    res.json(`User added with ID: ${newObj[0].id}`)
  } )
  app.get('/api/resolve/:url', async(req:Request, res:Response)=>{
   console.log(req.params.url)
  })
}

export default routes;