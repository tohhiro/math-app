import React from "react";
import classes from "./index.module.css";

type Props = {
  answer: number;
};

export const AnswerLabel: React.FC<Props> = (props: Props) => {
  const { answer } = props;
  return (
    <div className={classes.answerLabel}>
      <label role="label">Answer</label>
      <p className={classes.answerText} data-testid="answer">
        {answer}
      </p>
    </div>
  );
};
