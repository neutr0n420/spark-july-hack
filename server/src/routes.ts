import { Express, Request, Response } from "express";
import SQL from "./utils/connect";
import { CreateClient } from "./utils/redis";
import { nanoid } from "nanoid";
require('express-async-errors')

type user = {
  email: string;
  name: string;
};

function routes(app: Express) {
  //Check's the server is working fine or not
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/getstuds", async (req: Request, res: Response) => {
     const temp1 = app.get('classnamefromroute')

    if(temp1 == 'DBMS'){
      const getResult = await SQL`select * from DBMS`;
      res.json(getResult);
    }

    if(temp1 == 'ML'){
      const getResult = await SQL`select * from ML`;
      res.json(getResult);
    }

    if(temp1 == 'OOPS'){
      const getResult = await SQL`select * from OOPS`;
      res.json(getResult);
    }

    if(temp1 == 'ProjectManagmentDBMS'){
      const getResult = await SQL`select * from ProjectManagmentDBMS`;
      res.json(getResult);
    }
    
  });

  // Add the user with the name and it's email
  app.post("/api/users", async (req: Request, res: Response) => {
    const { email, name }: user = req.body;
    const newObj =
      await SQL`insert into users(name ,email) values (${name} , ${email}) RETURNING *;`;
    res.json(`User added with ID: ${newObj[0].id}`);
  });

  //Convert the shortned url into to orignal URL using Redis
  app.get("/api/:id", async (req: Request, res: Response) => {
    const id = req.params.url;

    // database instance
    const r = CreateClient();
    await r.connect();

    const count = await r.hGet(id, "count");
    if (count && Number(count) !== 0) {
      res.status(404).send("URL is inaccessible");
      await r.disconnect();
      return;
    }
    //Getting the Value from the key value pair
    await r.disconnect();
  });

  // Shorten endpoint
  app.post("/api/shorten", async (req: Request, res: Response) => {
    const body = req.body;
    const url: string = body.url;
    const count = 0;
    if (!url) {
      res.status(400).json({ error: "URL is required" });
    }
    // database instance
    const r = CreateClient();
    await r.connect();
    // generate randoms short id
    const id = nanoid();
    const rHash = {
      url,
      count,
    };
    await r.hSet(id, rHash);
    res.status(200).json({ url, id, accessedCount: count });
    await r.disconnect();
  });


  app.post('/api/createclassandqr', async (req: Request, res: Response) => {
      const  {className} : {className : string} = req.body;
      console.log(req.body)
      app.set('classnamefromroute',req.body.className.toString())
      let createTableQuery:object ; 
      className.toString() === 'DBMS' ?
      createTableQuery = await SQL`CREATE TABLE if not exists DBMS  AS SELECT * FROM studenttemp`: 
      className === 'ML' ?
      createTableQuery = await SQL`CREATE TABLE if not exists ML  AS SELECT * FROM studenttemp` :
      className === 'OOPS' ?
      createTableQuery = await SQL`CREATE TABLE if not exists OOPS  AS SELECT * FROM studenttemp` :
      className === 'ProjectManagment' ?
      createTableQuery = await SQL`CREATE TABLE if not exists PROJECTMANAGEMENT AS SELECT * FROM studenttemp` :
      res.json({message : 'Give valid Classroom'}).end()
      res.json({ message:"http://localhost:5173/form" });
  }); 

  app.post('/api/pushtodb', async (req:Request , res:Response) => {
    const temp = app.get('classnamefromroute')
  
    console.log(temp)
    const {email,password,rollnumber} : {email:string, password:string, rollnumber:string} = req.body || {}
    const checkUserPassword = await SQL`select password from studenttable 
                                where email = ${email};`

    try {
      console.log(checkUserPassword[0].password)
     if(checkUserPassword[0].password.toString() === password.toString()){
      console.log('its working till here')

      if(temp == 'OOPS'){
      const pushToDb = await SQL`insert into OOPS (rollnumber, email,time)
       values
       (${rollnumber},${email},${new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000))})
       `
       res.json(pushToDb)
      }

       if(temp == 'DBMS'){
      const pushToDb = await SQL`insert into DBMS (rollnumber, email,time)
       values
       (${rollnumber},${email},${new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000))})
       `
       res.json(pushToDb)
      }

       if(temp == 'ML'){
      const pushToDb = await SQL`insert into ML (rollnumber, email,time)
       values
       (${rollnumber},${email},${new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000))})
       `
       res.json(pushToDb)
      }

       if(temp == 'ProjectManagmentDBMS'){
      const pushToDb = await SQL`insert into ProjectManagmentDBMS (rollnumber, email,time)
       values
       (${rollnumber},${email},${new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000))})
       `
       res.json(pushToDb)
      }

      }
       else{
      res.json('Plz enter password properly')
       }
  }
  catch(error){
  res.json('TypeError: Cannot read properties of undefined')
  } 
  }
  )
}

export default routes;