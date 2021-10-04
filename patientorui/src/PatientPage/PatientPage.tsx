import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Icon } from "semantic-ui-react";

import { getPatientById } from "../services/patientService";
import { Gender, Patient } from "../types";
import AddEntry from "./AddEntry";
import Entry from "./PatientsEntry";
const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [addEntry, setAddentry] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const patient = getPatientById(id);
    patient.then((a) => setPatient(a.data)).catch((e) => console.log(e));
    console.log(patient);
  }, [addEntry]);
  if (addEntry == false) {
    return (
      <Card>
        {patient !== null ? (
          <div>
            <b>SSN:</b> {patient.ssn} <br />
            <b>Name:</b> {patient.name} <br />
            <b>Occupation:</b> {patient.occupation} <br />
            <b> Gender:</b>{" "}
            {patient.gender === Gender.Male ? (
              <Icon name="male" />
            ) : patient.gender === Gender.Female ? (
              <Icon name="female" />
            ) : (
              <Icon name="other gender" />
            )}{" "}
            <br />
            <b>Date of Birth:</b> {patient.dateOfBirth}
          </div>
        ) : (
          ""
        )}
        <Button onClick={() => setAddentry(true)} label="Add Entry" />
        <Card>
          <h3 style={{ textAlign: "center" }}>Entries</h3>

          {patient?.entries !== null
            ? patient?.entries?.map((a, index) => (
                <ul key={index}>
                  {" "}
                  <li>
                    <Entry entry={a} />
                  </li>{" "}
                </ul>
              ))
            : ""}
        </Card>
      </Card>
    );
  } else {
    return (
      <div>
        <Button
          onClick={() => setAddentry(false)}
          label="Cancel adding entry"
        />
        <AddEntry />
      </div>
    );
  }
};
export default PatientPage;
