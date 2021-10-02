import { Entry, Gender, HealthCheckRating } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (params: any): params is Gender => {
  const checkIfGender = Object.values(Gender).includes(params);

  return checkIfGender;
};
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
export const parseString = (text: string): string => {
  if (!text || !isString(text)) {
    throw new Error("Incorrect or missing value");
  } else {
    return text;
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  } else {
    return gender;
  }
};
export const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};
export const parseHealthCheckRating = (
  healthCheckRating: HealthCheckRating
) => {
  const checkIfValidRating: boolean =
    Object.values(HealthCheckRating).includes(healthCheckRating);
  if (checkIfValidRating) {
    return healthCheckRating;
  }
  throw new Error("Not valid healthcheckrating");
};
export const validateEntry = (entry: Entry): boolean => {
  const validatedEntry = {
    id: parseString(entry.id),
    date: parseDate(entry.date),
    description: parseString(entry.description),
    specialist: parseString(entry.specialist),
    diagnosisCodes: entry.diagnosisCodes || undefined,
    type: entry.type,
  };

  if (validatedEntry) {
    return true;
  } else {
    return false;
  }
};
