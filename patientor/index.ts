import express from "express";
import cors from "cors";
const app = express();
app.use(cors);
app.use(express.json());

const port = 3000;
app.get("api/ping", (_req, res) => {
  res.send("pong");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
