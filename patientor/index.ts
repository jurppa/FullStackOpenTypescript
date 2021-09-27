/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import cors from "cors";
import { getDiagnoses } from "./services/diagnoseService";
import {
  addPatient,
  getPatientById,
  getPatients,
} from "./services/patientService";

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
app.get("/api/patients", (_req, res) => {
  console.log("get api/pati..");
  const patients = getPatients();
  res.send(patients);
});
app.get("/api/patients/:id", (req, res) => {
  const patient = getPatientById(req.params.id);
  res.send(patient);
});
app.post("/api/patients", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newPatient = addPatient({ name, dateOfBirth, ssn, gender, occupation });

  res.json(newPatient);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
