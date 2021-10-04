import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Entry } from "../types";
const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "HealthCheck":
      return (
        <Card>
          HealthCheck entry
          <Icon name="plus" />
          <h4>
            Date: {entry.date} <br />
          </h4>
          Description: {entry.description} <br />
          Specialist: {entry.specialist} <br />
          Health Check Rating: {entry.healthCheckRating}
        </Card>
      );
    case "Hospital":
      return (
        <Card>
          Hospital entry
          <Icon name="hospital" />
          <h4>
            Date: {entry.date} <br />
          </h4>
          {entry.discharge !== undefined
            ? `Discharge criteria: ${
                entry.discharge.criteria
              } ${" "} discharge date: ${entry.discharge.date}`
            : ""}{" "}
          <br />
          Description: {entry.description} <br />
          Specialist: {entry.specialist}
        </Card>
      );
    case "OccupationalHealthcare":
      return (
        <Card>
          Occupational Healthcare entry <Icon name="folder" />
          <h4>
            Date: {entry.date} <br />
          </h4>
          <b>Description:</b> {entry.description} <br />
          <b>Specialist:</b> {entry.specialist} <br />
          <br />
          Sickeleave:{" "}
          {entry.sickLeave !== undefined
            ? `${entry.sickLeave?.startDate} to ${entry.sickLeave?.endDate}`
            : "No need for sickleave"}
          <br />
          Employers name:{entry.employerName}
        </Card>
      );
    default:
      throw new Error("Error showing entries");
  }
};
export default EntryDetails;
