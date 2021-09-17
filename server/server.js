import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import {default as mongo} from "mongodb";

import { v4 as uuidv4 } from "uuid";

import bodyParser from "body-parser";
const urlencodedParser = bodyParser.urlencoded({
    extended: true
  });
  
  export const app = express();
  
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors({origin:process.env.FRONT_END_HOST,credentials: true}));

  const url = process.env.DB_HOST + ':' + process.env.DB_PORT;

  export let db;

  mongo.MongoClient.connect(url, (err, client) => {
	if (err) {
		console.log("Error, database connection failed");
	} else {
		console.log("database connection succeeded");
	}
	db = client.db(process.env.DB_NAME);
});

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(process.env.PORT || 4000, () => console.log("server is running on port 4000"));