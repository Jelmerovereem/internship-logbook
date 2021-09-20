import express, {json, urlencoded} from "express";
import cors from "cors";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from 'url';

import dotenv from "dotenv";
dotenv.config();

import {default as mongo} from "mongodb";
const ObjectId = mongo.ObjectId;

import { v4 as uuidv4 } from "uuid";
  
export const app = express();

const port = process.env.PORT || "3001";

app.set("port", port);
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(path.join("..", "www", "build")));
app.use(cors({origin:process.env.FRONT_END_HOST,credentials: true}));

const url = process.env.DB_HOST + ':' + process.env.DB_PORT;

export let db;
console.log('connecting to database...')
mongo.MongoClient.connect(url, (err, client) => {
if (err) {
  console.log(err)
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

app.get("/blogPost/:id", async (req, res) => {
  console.log(req.params)
  const {id} = req.params;

  const blogData = await db.collection("posts").findOne({"_id": ObjectId(id)});
  console.log(blogData)
  res.send({status: 200, blogData})
})

app.put("/blog/:id", async (req, res) => {
  const {id} = req.params;
  const {viewersCount} = req.body;

  const blogData = await db.collection("posts").findOneAndUpdate({"_id": ObjectId(id)}, {$set: {viewersCount: viewersCount}});

  if (blogData) {
    console.log(blogData)
    res.send({status: 200})
  }
})

app.post("/blog", async (req, res) => {
  console.log(`Blogdata`, req.body);
  req.body.viewersCount = 0;

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

app.get("/*", (req, res) => {
  res.sendFile("index.html", {root: path.join(dirname(fileURLToPath(import.meta.url)), "/../www/build")})
})


app.listen(process.env.PORT || port, () => console.log(`server is running on port ${port}`));