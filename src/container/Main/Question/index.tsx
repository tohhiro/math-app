import React from "react";
import classes from "./index.module.css";

type Props = {
  q0: number;
  q1: number;
};

export const Question: React.FC<Props> = (props: Props) => {
  const { q0, q1 } = props;

  return (
    <div className={classes.qContainer}>
      <p data-testid="q0">{q0}</p>
      <p>+</p>
      <p data-testid="q1">{q1}</p>
    </div>
  );
};
