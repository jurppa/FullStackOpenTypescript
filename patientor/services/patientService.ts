import patients from "../data/patients";
import { NewPatientEntry, Patient, NonSensitivePatient, Entry } from "../types";
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

//Add entry
export const addEntryToPatient = (entry: Entry, id: string): Entry => {
  const patientToAddEntryTo = getPatientById(id);

  if (patientToAddEntryTo) {
    // Tarkastetaan entryn tyypin mukaan
    if (entry) {
      switch (entry.type) {
        case "HealthCheck":
          const _validatedEntry = {};
          break;

        case "Hospital":
          break;
        default:
          break;
      }
    }
  } else {
    throw new Error("Not correct id for patient or not found");
  }
  //patientToAddEntryTo.entries?.push(validatedEntry);
  return entry;
};
