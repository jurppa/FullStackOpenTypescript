import express from "express";
import cors from "cors";
import { getDiagnoses } from "./services/diagnoseService";
const app = express();
app.use(cors());

//

app.use(express.json());
app.get("/api/ping", (_req, res) => {
  console.log("ping");
  res.send("pong");
});
app.get("/api/diagnoses", (_req, res) => {
  console.log("get api/diag...");
  const diagnoses = getDiagnoses();
  res.send(diagnoses);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
