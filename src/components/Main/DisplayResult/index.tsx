import React from 'react';
import classes from './index.module.css';

type Props = {
  answer: {
    correct: number;
    incorrect: number;
  };
};

export const DisplayResult = React.memo(({ answer }: Props) => (
  <div className={classes.container}>
    <p>正解: {answer.correct}</p>
    <p>不正解: {answer.incorrect}</p>
  </div>
));

DisplayResult.displayName = 'DisplayResult';
