import express from "express";
import cors from "cors";
import { getDiagnoses } from "./services/diagnoseService";
import {
  addEntryToPatient,
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
  res.json(patient);
});
app.post("/api/patients/:id/entries", (req, res) => {
  const entry = addEntryToPatient(req.body, req.params.id);
  res.json(entry);
});
app.post("/api/patients", (req, res) => {
  //

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient = addPatient({ name, dateOfBirth, ssn, gender, occupation });

  res.json(newPatient);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
