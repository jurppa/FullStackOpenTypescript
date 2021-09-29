import patients from "../data/patients";
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
    // Validaatiota tähän entriesseille
    if (
      patientToReturn.entries !== null &&
      patientToReturn.entries?.some(
        (a) =>
          a.type === "HealthCheck" ||
          a.type === "Hospital" ||
          a.type === "OccupationalHealthcare"
      )
    ) {
      return patientToReturn;
    } else {
      return patientToReturn;
    }
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
