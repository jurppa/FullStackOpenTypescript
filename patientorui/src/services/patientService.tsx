/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { apiBaseUrl } from "../constants";
export const getPatientById = async (id: string) => {
  try {
    const patient = await axios.get(`${apiBaseUrl}/patients/${id}`);
    return patient;
  } catch (err) {
    throw new Error("Error in getting patient");
  }
};
