import React from "react";
import { useStateValue } from "../state";
import { BaseEntry } from "../types";
interface Props {
  entry: BaseEntry;
}
const Entry = ({ entry }: Props) => {
  const [{ diagnosis }] = useStateValue();

  console.log(entry);
  return (
    <>
      {" "}
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
        : ""}
    </>
  );
};

export default Entry;
