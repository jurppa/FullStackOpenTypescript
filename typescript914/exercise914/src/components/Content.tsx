import React from "react";
import { CoursePart } from "../types";
import Part from "./Part";
interface Props {
  courseParts: CoursePart[];
}
const Content = ({ courseParts }: Props) => {
  const assertNever = (value: any): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  const parts = courseParts.map((coursePart, i) => {
    switch (coursePart.name) {
      case coursePart.name:
        return <Part key={i} coursePart={coursePart} />;

      default:
        return assertNever(coursePart);
    }
  });
  return <div>{parts}</div>;
};
export default Content;
