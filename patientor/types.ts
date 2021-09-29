// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;
export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries?: Entry[];
}
export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose["code"]>;
}
export interface OccupationalHealthcareEntry extends BaseEntry {
  employerName: string;
  type: "OccupationalHealthcare";
  sickLeave?: { startDate: string; endDate: string };
}
export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge?: {
    date: string;

    criteria: string;
  };
}
export type NonSensitivePatient = Omit<Patient, "ssn">;
export type NewPatientEntry = Omit<Patient, "id" | "entries">;
export type PublicPatient = Omit<Patient, "ssn" | "entries">;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}
