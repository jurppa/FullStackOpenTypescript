import React from "react";
interface Props {
  courseParts: [
    {
      name: string;
      exerciseCount: number;
    }
  ];
}
const Content = ({ courseParts }: Props): JSX.Element => {
  return (
    <div>
      {courseParts.map((a) => (
        <p key={a.name}>
          {a.name} {a.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
