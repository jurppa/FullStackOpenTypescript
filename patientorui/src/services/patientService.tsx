import axios from "axios";
import { apiBaseUrl } from "../constants";
export const getPatientById = async (id: string) => {
  const patient = await axios
    .get(`${apiBaseUrl}/patients/${id}`)
    .then((a) => a)
    .catch((e) => console.log(e));
  return patient;
};
