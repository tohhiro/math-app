import React, { memo } from 'react';
import classes from './index.module.css';

type Props = {
  answer: {
    correct: number;
    incorrect: number;
  };
};

export const DisplayResult: React.FC<Props> = memo(({ answer }: Props) => (
  <div className={classes.container}>
    {Object.keys(answer).map((key) => (
      <p key={key}>{`${key}: ${answer[key]}`}</p>
    ))}
  </div>
));

DisplayResult.displayName = 'DisplayResult';
