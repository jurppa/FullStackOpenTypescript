import React from "react";
import { Entry } from "../types";
const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "HealthCheck":
      return (
        <div>
          HealthCheck entry:
          <h4>
            Date: {entry.date} <br />
          </h4>
          Description: {entry.description} <br />
          Specialist: {entry.specialist}
        </div>
      );
    case "Hospital":
      return (
        <div>
          Hospital entry:
          <h4>
            Date: {entry.date} <br />
          </h4>
          {entry.discharge !== undefined
            ? `Discharge criteria: ${entry.discharge.criteria} discharge date: ${entry.discharge.date}`
            : ""}
          Description: {entry.description} <br />
          Specialist: {entry.specialist}
        </div>
      );
    case "OccupationalHealthcare":
      return (
        <div>
          Occupational Healthcare entry:
          <h4>
            Date: {entry.date} <br />
          </h4>
          Description: {entry.description} <br />
          Specialist: {entry.specialist} <br />
          Sickeleave:{" "}
          {entry.sickLeave !== undefined
            ? `${entry.sickLeave?.startDate} to ${entry.sickLeave?.endDate}`
            : "No need for sickleave"}
          <br />
          Employers name:{entry.employerName}
        </div>
      );
    default:
      throw new Error("Error showing entries");
  }
};
export default EntryDetails;
