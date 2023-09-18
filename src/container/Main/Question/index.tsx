import React from "react";
import classes from "./index.module.css";

export type QuestionProps = "----" | number;

type QuestionsProps = {
  questions: QuestionProps[];
};

export const Question: React.FC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;

  return (
    <div className={classes.container}>
      <p data-testid="questionLeft">{questions[0]}</p>
      <p>+</p>
      <p data-testid="questionRight">{questions[1]}</p>
    </div>
  );
};
