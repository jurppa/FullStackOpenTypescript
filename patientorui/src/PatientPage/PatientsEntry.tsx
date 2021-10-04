import React from "react";
import { useStateValue } from "../state";
import { Entry } from "../types";
import EntryDetails from "./EntryDetails";
interface Props {
  entry: Entry;
}
const PatientsEntry = ({ entry }: Props) => {
  const [{ diagnosis }] = useStateValue();

  return (
    <>
      {" "}
      <h4>Diagnosis codes for visit</h4>
      {entry.diagnosisCodes?.entries !== undefined
        ? entry.diagnosisCodes?.map((a, index) =>
            a.length > 0 && !undefined ? (
              <li key={index} style={{ padding: "2px" }}>
                <b>{a}</b>{" "}
                {diagnosis
                  .filter((b) => b.code === a)
                  .map((b) => (
                    <>
                      {" "}
                      <i>{b.name}</i>
                    </>
                  ))}{" "}
              </li>
            ) : (
              "No diagnosis code and diagnosis"
            )
          )
        : "No diagnosis codes"}
      <h4>Entry Details</h4>
      <EntryDetails entry={entry} />
    </>
  );
};

export default PatientsEntry;
