/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diagnose } from "../types";
export const getAllDiagnoses = async () => {
  try {
    const diagnoses = await axios.get<Diagnose[]>(`${apiBaseUrl}/diagnoses/`);
    return diagnoses;
  } catch (err) {
    throw new Error("Error in getting diagnoses");
  }
};
