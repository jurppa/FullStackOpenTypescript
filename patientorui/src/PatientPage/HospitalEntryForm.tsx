import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import { addPatientEntry } from "../services/patientService";
import { useStateValue } from "../state";
import { HospitalEntry } from "../types";

const HospitalEntryForm = () => {
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [{ diagnosis }] = useStateValue();

  const [diagnosisCode, setDiagnosisCode] = useState([""]);
  const [dischargeDate, setDischargeDate] = useState("");
  const [criteria, setCriteria] = useState("");
  const { id } = useParams<{ id: string }>();
  const [errorMessage, setErrorMessage] = useState("");
  const handleEntry = async () => {
    if (description === "") {
      setErrorMessage("Please fill in description");
      setTimeout(() => setErrorMessage(""), 3500);
    }
    if (specialist === "") {
      setErrorMessage("Please fill in specialist");
      setTimeout(() => setErrorMessage(""), 3500);
    } else if (description !== "" && specialist !== "") {
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

      await addPatientEntry(id, newEntry);
    }
  };
  const handleDiagnosisChange = (value: string) => {
    const diagnosisCodes: string[] = [];
    diagnosisCodes.push(value);
    console.log("val", value);
    setDiagnosisCode(diagnosisCodes);
  };
  return (
    <Form onSubmit={handleEntry}>
      Description <br />
      {errorMessage !== "" ? (
        <span style={{ backgroundColor: "beige", padding: "2px" }}>
          {" "}
          {errorMessage}{" "}
        </span>
      ) : (
        ""
      )}
      <br />
      <Input onChange={(e) => setDescription(e.target.value)} /> <br />
      Specialist <Input onChange={(e) => setSpecialist(e.target.value)} />{" "}
      <br />
      Choose diagnosis for hospital entry: <br />
      <select onChange={(e) => handleDiagnosisChange(e.target.value)}>
        {" "}
        {diagnosis.map((a, index) => (
          <option key={index} value={a.code}>
            {a.code} {a.name}
          </option>
        ))}
      </select>
      <br />
      Discharge date{" "}
      <Input onChange={(e) => setDischargeDate(e.target.value)} />
      Criteria for discharge
      <Input onChange={(e) => setCriteria(e.target.value)} />
      Submit <Button type="submit" />
    </Form>
  );
};

export default HospitalEntryForm;
