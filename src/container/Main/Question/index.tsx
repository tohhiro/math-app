import React from "react";
import classes from "./index.module.css";

export type QuestionProps = "----" | number;

type QuestionsProps = {
  questionLeft: QuestionProps;
  questionRight: QuestionProps;
};

export const Question: React.FC<QuestionsProps> = (props: QuestionsProps) => {
  const { questionLeft, questionRight } = props;

  return (
    <div className={classes.container}>
      <p data-testid="questionLeft">{questionLeft}</p>
      <p>+</p>
      <p data-testid="questionRight">{questionRight}</p>
    </div>
  );
};
