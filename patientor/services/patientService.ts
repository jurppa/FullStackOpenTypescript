import patients from "../data/patients.json";
import { NewPatientEntry, Patient, NonSensitivePatient } from "../types";
import { v1 as uuid } from "uuid";
import {
  parseDate,
  parseGender,
  parseString,
} from "../utility/patientValidator";

export const getPatients = (): Array<NonSensitivePatient> => {
  return patients;
};
export const getPatientById = (id: string): Patient => {
  const patientToReturn = patients.find((a) => a.id === id);
  if (patientToReturn) {
    return patientToReturn;
  } else {
    throw new Error("Not valid id");
  }
};
export const addPatient = (patient: NewPatientEntry): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    name: parseString(patient.name),
    ssn: parseString(patient.ssn),
    dateOfBirth: parseDate(patient.dateOfBirth),
    gender: parseGender(patient.gender),
    occupation: parseString(patient.occupation),
  };
  patients.push(newPatient);
  return newPatient;
};
