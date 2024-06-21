import React from 'react';
import classes from './index.module.css';

type Props = {
  answer: {
    correct: number;
    incorrect: number;
  };
};

export const DisplayResult: React.FC<Props> = ({ answer }) => (
  <div className={classes.container}>
    {Object.keys(answer).map((key) => (
      <p key={key}>{`${key}: ${answer[key]}`}</p>
    ))}
  </div>
);
