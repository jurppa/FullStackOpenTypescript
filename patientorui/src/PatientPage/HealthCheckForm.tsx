import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import { addPatientEntry } from "../services/patientService";
import { useStateValue } from "../state";
import { HealthCheckEntry } from "../types";

const HealthCheckForm = () => {
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [{ diagnosis }] = useStateValue();

  const [diagnosisCode, setDiagnosisCode] = useState([""]);
  const [healthCheckRating, setHealthCheckRating] = useState(0);

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
      const newEntry: HealthCheckEntry = {
        id: "",
        type: "HealthCheck",
        date: Date.now().toLocaleString(),
        description: description,
        specialist: specialist,
        diagnosisCodes: diagnosisCode,
        healthCheckRating: healthCheckRating,
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
  const handleHealthCheckRatingChange = (value: string) => {
    const healthRatingNumber = parseInt(value);
    setHealthCheckRating(healthRatingNumber);
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
      Choose diagnosis for health check entry: <br />
      <select onChange={(e) => handleDiagnosisChange(e.target.value)}>
        {" "}
        {diagnosis.map((a, index) => (
          <option key={index} value={a.code}>
            {a.code} {a.name}
          </option>
        ))}
      </select>
      Choose Health Check Rating
      <select onChange={(e) => handleHealthCheckRatingChange(e.target.value)}>
        {" "}
        <option value={0}>Healthy</option>
        <option value={1}>LowRisk</option>
        <option value={2}>HighRisk</option>{" "}
        <option value={3}>CriticalRisk</option>{" "}
      </select>
      <br />
      <Button type="submit" label="Submit" />
    </Form>
  );
};

export default HealthCheckForm;
