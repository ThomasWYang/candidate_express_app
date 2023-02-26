import db from "./mongodbconn.js";
import express from "express";
import { ObjectId } from "mongodb";

const router = express.Router();
let index = 5;


router.get("/", async (req, res) => {
  let collection = await db.collection("candidates");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("candidates");
  let query = { id: parseInt(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection("candidates");
  let newDocument = {
    id: index++,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    score: req.body.score,
  };
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.put("/:id", async (req, res) => {
  const query = { id: parseInt(req.params.id) };
  const updates = {
    $set: {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      score: req.body.score,
    },
  };

  let collection = await db.collection("candidates");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
  const query = { id: parseInt(req.params.id) };

  const collection = db.collection("candidates");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
