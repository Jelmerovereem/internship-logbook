import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import {default as mongo} from "mongodb";
const ObjectId = mongo.ObjectId;

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


app.get("/blogs", async (req, res) => {
  const blogs = await db.collection("posts").find().toArray();
  res.send({status: 200, blogs})
})

app.post("/blog", async (req, res) => {
  console.log(`Blogdata`, req.body);

  const post = await db.collection("posts").insertOne(req.body);

  if (post) {
    console.log(post)
    res.send({status: 200, blogId: post.insertedId});
  } else {
    res.send({status: 400})
  }
  
})

app.delete("/blog", async (req, res) => {
  console.log(req.body.postId)
  const deleted = await db.collection("posts").deleteOne({"_id": ObjectId(req.body.postId)});
  
  if (deleted) {
    console.log(deleted)
    res.send({status: 200})
  } else {
    res.send({status: 400})
  }
})

app.listen(process.env.PORT || 4000, () => console.log("server is running on port 4000"));