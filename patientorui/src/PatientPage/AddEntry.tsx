import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import HealthCheckForm from "./HealthCheckForm";
import HospitalEntryForm from "./HospitalEntryForm";
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
  } else {
    return <div></div>;
  }
};

export default AddEntry;
