import React from 'react';
import classes from './index.module.css';

type Props = {
  answer: {
    correct: number;
    incorrect: number;
  };
};

export const DisplayResult: React.FC<Props> = (props) => (
  <div className={classes.container}>
    {Object.keys(props.answer).map((key) => (
      <p key={key}>{`${key}: ${props.answer[key]}`}</p>
    ))}
  </div>
);
