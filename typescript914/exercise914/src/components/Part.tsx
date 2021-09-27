import React from "react";
import { CoursePart } from "../types";
interface Props {
  coursePart: CoursePart;
}
const Part = ({ coursePart }: Props) => {
  switch (coursePart.type) {
    case "normal":
      return (
        <div>
          <b>{coursePart.name}</b> {coursePart.exerciseCount} <br />
          <i> {coursePart.description} </i>
        </div>
      );
    case "submission":
      return (
        <div>
          <b>{coursePart.name} </b>
          {coursePart.exerciseCount} <br />
          <i>{coursePart.description}</i>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <b>{coursePart.name} </b> {coursePart.exerciseCount} <br />
          project exercises {coursePart.groupProjectCount}
        </div>
      );
    case "special":
      return (
        <div>
          <b>{coursePart.name}</b> {coursePart.exerciseCount} <br />{" "}
          {coursePart.description} <br /> required skills:{" "}
          {coursePart.requirements[0]}, {coursePart.requirements[1]}
        </div>
      );
    default:
      throw new Error("");
      break;
  }
};

export default Part;
