import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import { addPatientEntry } from "../services/patientService";
import { useStateValue } from "../state";
import { OccupationalHealthcareEntry } from "../types";

const OccupationalHealthcareForm = () => {
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [{ diagnosis }] = useStateValue();

  const [diagnosisCode, setDiagnosisCode] = useState([""]);
  const [employer, setEmployer] = useState("");
  const [sickleaveStarts, setSickleaveStarts] = useState("");
  const [sickleaveEnds, setSickleaveEnds] = useState("");

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
      const newEntry: OccupationalHealthcareEntry = {
        id: "",
        type: "OccupationalHealthcare",
        date: Date.now().toLocaleString(),
        description: description,
        specialist: specialist,
        diagnosisCodes: diagnosisCode,
        employerName: employer,
        sickLeave: {
          startDate: sickleaveStarts,
          endDate: sickleaveEnds,
        },
      };

      await addPatientEntry(id, newEntry);
      console.log(newEntry);
    }
  };
  const handleDiagnosisChange = (value: string) => {
    const diagnosisCodes: string[] = [];
    diagnosisCodes.push(value);
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
      Employers name: <Input onChange={(e) => setEmployer(e.target.value)} />
      <br />
      Choose diagnosis for entry: <br />
      <select onChange={(e) => handleDiagnosisChange(e.target.value)}>
        {" "}
        {diagnosis.map((a, index) => (
          <option key={index} value={a.code}>
            {a.code} {a.name}
          </option>
        ))}
      </select>
      Sickleave: <br />
      Start date: <br />
      <Input type="Date" onChange={(e) => setSickleaveStarts(e.target.value)} />
      <br />
      End date:
      <br />
      <Input type="Date" onChange={(e) => setSickleaveEnds(e.target.value)} />
      <Button type="submit" label="Submit" />
    </Form>
  );
};

export default OccupationalHealthcareForm;
