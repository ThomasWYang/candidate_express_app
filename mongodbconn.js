import { MongoClient } from "mongodb";

const connectionString = "mongodb://localhost:27017";

const client = new MongoClient(connectionString);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let conn;
try {
  conn = await client.connect();
  console.log("Mongo db connected");
} catch (e) {
  console.error(e);
}
let db = conn.db("candidates");

db.collection("candidates").deleteMany({});
db.collection("candidates").insertMany([
  {
    id: 1,
    fname: "Thomas",
    lname: "Yang",
    email: "thomas.y2022@gmail.com",
    score: getRndInteger(60, 100),
  },
  {
    id: 2,
    fname: "Thomas",
    lname: "Demo",
    email: "thomas.demo@gmail.com",
    score: getRndInteger(60, 100),
  },
  {
    id: 3,
    fname: "Demo",
    lname: "Yang",
    email: "demo.yang@gmail.com",
    score: getRndInteger(60, 100),
  },
  {
    id: 4,
    fname: "Demo",
    lname: "Demo",
    email: "demo.demo@gmail.com",
    score: getRndInteger(60, 100),
  },
]);

export default db;
