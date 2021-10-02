import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Input, Select } from "semantic-ui-react";
import { addPatientEntry } from "../services/patientService";
import { useStateValue } from "../state";
import { Diagnose, HospitalEntry } from "../types";

const EntryForm = () => {
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [{ diagnosis }] = useStateValue();

  const [diagnosisCode, setDiagnosisCode] = useState([""]);
  const [dischargeDate, setDischargeDate] = useState("");
  const [criteria, setCriteria] = useState("");
  const { id } = useParams<{ id: string }>();

  const handleEntry = () => {
    const newEntry: HospitalEntry = {
      id: "",
      type: "Hospital",
      date: Date.now().toLocaleString(),

      description: description,
      specialist: specialist,
      diagnosisCodes: diagnosisCode,
      discharge: {
        date: dischargeDate,
        criteria: criteria,
      },
    };
    const postedEntry = addPatientEntry(id, newEntry);
    console.log("postedEntry: ", postedEntry);
  };
  const handleDiagnosisChange = (e: Event, value: Diagnose) => {
    e.preventDefault();
    const diagnosisCodes: string[] = [];
    diagnosisCodes.push(value.code);
    setDiagnosisCode(diagnosisCodes);
  };
  return (
    <Form onSubmit={handleEntry}>
      Description <Input onChange={(e) => setDescription(e.target.value)} />{" "}
      <br />
      Specialist <Input onChange={(e) => setSpecialist(e.target.value)} />{" "}
      <br />
      Choose diagnosis for hospital
      <Select
        options={diagnosis.map((a, index) => (
          <option key={index} value={Object.values(a.code)}>
            {a.code} {a.name}
          </option>
        ))}
        onChange={() => handleDiagnosisChange}
      ></Select>{" "}
      <br />
      Discharge date{" "}
      <Input onChange={(e) => setDischargeDate(e.target.value)} />
      Criteria for discharge
      <Input onChange={(e) => setCriteria(e.target.value)} />
      Submit <Button type="submit" />
    </Form>
  );
};

export default EntryForm;
