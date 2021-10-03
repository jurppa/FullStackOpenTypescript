import patients from "../data/patients";
import { NewPatientEntry, Patient, NonSensitivePatient, Entry } from "../types";
import { v1 as uuid } from "uuid";
import {
  parseDate,
  parseGender,
  parseString,
  validateEntry,
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
  entry.id = uuid();
  entry.date = new Date().toLocaleDateString();
  const validatedEntry = validateEntry(entry);
  if (validatedEntry) {
    switch (entry.type) {
      case "HealthCheck":
        if (entry.healthCheckRating !== null || undefined) {
          patientToAddEntryTo.entries?.push(entry);
          return entry;
        } else {
          throw new Error("HealthCheck entry not valid");
        }

      case "Hospital":
        patientToAddEntryTo.entries?.push(entry);
        return entry;
      case "OccupationalHealthcare":
        //
        if (entry.employerName.length > 1) {
          patientToAddEntryTo.entries?.push(entry);
        }
        return entry;
      default:
        throw new Error("Not valid entry");
    }
  }
  throw new Error("Error in entry");
};
