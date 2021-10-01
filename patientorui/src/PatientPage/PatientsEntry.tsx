import React from "react";
import { useStateValue } from "../state";
import { Entry } from "../types";
import EntryDetails from "./EntryDetails";
interface Props {
  entry: Entry;
}
const PatientsEntry = ({ entry }: Props) => {
  const [{ diagnosis }] = useStateValue();

  console.log(entry);
  return (
    <>
      {" "}
      <h4>Diagnosis codes</h4>
      {entry.diagnosisCodes !== undefined
        ? entry.diagnosisCodes?.map((a, index) => (
            <li key={index}>
              {a}{" "}
              {diagnosis
                .filter((b) => b.code === a)
                .map((b) => (
                  <>{b.name}</>
                ))}{" "}
            </li>
          ))
        : "No diagnosis codes"}
      <h4>Entry Details</h4>
      <EntryDetails entry={entry} />
    </>
  );
};

export default PatientsEntry;
