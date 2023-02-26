import express from "express";
import cors from "cors";
import router from "./candidates.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/candidates", router);

let port = 4000;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
