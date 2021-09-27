import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getPatientById } from "../services/patientService";
const PatientPage = () => {
  const [patient, setPatient] = useState("");
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const patient = getPatientById(id).then((a) => a);
    // asynciksi?
    setPatient("asf");
    console.log("patient", patient);
  }, []);
  return <div>{patient !== null ? patient : ""}</div>;
};

export default PatientPage;
