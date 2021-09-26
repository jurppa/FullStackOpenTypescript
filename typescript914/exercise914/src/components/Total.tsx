import React from "react";
interface Props {
  numberOfCourses: number;
}
const Total = ({ numberOfCourses }: Props) => {
  return <p>Number of exercises {numberOfCourses}</p>;
};

export default Total;
