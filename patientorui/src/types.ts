export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries?: Entry[];
}
export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
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
export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}
