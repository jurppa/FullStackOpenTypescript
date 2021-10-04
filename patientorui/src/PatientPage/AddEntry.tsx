import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import HealthCheckForm from "./HealthCheckForm";
import HospitalEntryForm from "./HospitalEntryForm";
import OccupationalHealthcareForm from "./OccupationalHealthCareEntry";
const AddEntry = () => {
  const [entryType, setEntryType] = useState("");

  if (entryType === "") {
    return (
      <div>
        <h4>Add new entry, choose entry type</h4>
        <Button
          label="Hospital Entry"
          onClick={() => setEntryType("HospitalEntry")}
        />
        <Button
          label="HealthCheck Entry"
          onClick={() => setEntryType("HealthCheckEntry")}
        />
        <Button
          label="Occupational Healthcare Entry"
          onClick={() => setEntryType("OccupationalHealthCareEntry")}
        />
      </div>
    );
  }
  if (entryType === "HospitalEntry") {
    return (
      <div>
        asd
        <HospitalEntryForm />
      </div>
    );
  }
  if (entryType === "HealthCheckEntry") {
    return (
      <div>
        <HealthCheckForm />
      </div>
    );
  }
  if (entryType === "OccupationalHealthCareEntry") {
    return (
      <div>
        <OccupationalHealthcareForm />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AddEntry;
