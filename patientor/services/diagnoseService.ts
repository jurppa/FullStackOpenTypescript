import { Diagnose } from "../types";
import diagnoses from "../data/diagnoses.json";
export const getDiagnoses = (): Array<Diagnose> => {
  return diagnoses;
};
