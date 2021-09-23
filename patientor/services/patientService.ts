import patients from "../data/patients.json";
import { NewPatientEntry, Patient } from "../types";
import { v1 as uuid } from "uuid";

export const getPatients = (): Array<
  Pick<Patient, "id" | "dateOfBirth" | "gender" | "name" | "occupation">
> => {
  return patients;
};
export const addPatient = (patient: NewPatientEntry) => {
  const newId: string = uuid();
  const newPatient: Patient = {
    id: uuid(),
    name: patient.name,
    ssn: patient.ssn,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  };
  patients.push(newPatient);
};
