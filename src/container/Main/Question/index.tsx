import React from "react";
import classes from "./index.module.css";

export type QuestionProps = "----" | number;

type QuestionsProps = {
  q0: QuestionProps;
  q1: QuestionProps;
};

export const Question: React.FC<QuestionsProps> = (props: QuestionsProps) => {
  const { q0, q1 } = props;

  return (
    <div className={classes.container}>
      <p data-testid="q0">{q0}</p>
      <p>+</p>
      <p data-testid="q1">{q1}</p>
    </div>
  );
};
