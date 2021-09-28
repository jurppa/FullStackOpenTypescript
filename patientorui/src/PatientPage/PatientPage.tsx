import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getPatientById } from "../services/patientService";
import { Patient } from "../types";
const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const patient = getPatientById(id);
    patient.then((a) => setPatient(a.data)).catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {patient !== null ? (
        <div>
          SSN {patient.ssn} <br />
          Name {patient.name} <br />
          Occupation {patient.occupation} <br />
          Gender {patient.gender} <br />
          Date of Birth {patient.dateOfBirth}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PatientPage;
