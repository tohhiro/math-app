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
    {Object.keys(answer).map((key, index) => (
      <p key={`${key}${index}`}>{`${key}: ${answer[key]}`}</p>
    ))}
  </div>
));

DisplayResult.displayName = 'DisplayResult';
