import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getPatientById } from "../services/patientService";
import { useStateValue } from "../state";
import { Patient } from "../types";
import Entry from "./Entry";
const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [{ diagnosis }] = useStateValue();
  console.log("diagnosis: ", diagnosis);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const patient = getPatientById(id);
    patient.then((a) => setPatient(a.data)).catch((e) => console.log(e));
  }, []);
  console.log(patient);

  return (
    <div>
      {patient !== null ? (
        <div>
          SSN: {patient.ssn} <br />
          Name: {patient.name} <br />
          Occupation: {patient.occupation} <br />
          Gender: {patient.gender} <br />
          Date of Birth: {patient.dateOfBirth}
        </div>
      ) : (
        ""
      )}
      <h4>entries</h4>
      {patient?.entries !== null
        ? patient?.entries?.map((a, index) => (
            <ul key={index}>
              {" "}
              <li>
                <Entry entry={a} />
              </li>{" "}
              {a.diagnosisCodes !== null
                ? a.diagnosisCodes?.map((a, index) => (
                    <li key={index}>
                      {a}{" "}
                      {diagnosis
                        .filter((b) => b.code === a)
                        .map((b) => (
                          <>{b.name}</>
                        ))}{" "}
                    </li>
                  ))
                : ""}
            </ul>
          ))
        : ""}
    </div>
  );
};

export default PatientPage;
