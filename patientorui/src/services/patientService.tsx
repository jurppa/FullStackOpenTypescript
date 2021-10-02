/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Entry } from "../types";
export const getPatientById = async (id: string) => {
  try {
    const patient = await axios.get(`${apiBaseUrl}/patients/${id}`);
    return patient;
  } catch (err) {
    throw new Error("Error in getting patient");
  }
};
export const addPatientEntry = async (id: string, newEntry: Entry) => {
  try {
    const entry = await axios.post(
      `${apiBaseUrl}/patients/${id}/entries`,
      newEntry
    );
    return entry;
  } catch (error) {
    throw new Error("Error in adding patient entry");
  }
};
