import React from 'react';
import classes from './index.module.css';

type Props = {
  answer: number;
  count: number;
};

export const AnswerLabel: React.FC<Props> = (props: Props) => {
  const { answer, count } = props;
  return (
    <div className={classes.container}>
      <label role="label">
        Answer<span>（{count}）</span>
      </label>
      <p className={classes.answerText} data-testid="answer">
        {answer}
      </p>
    </div>
  );
};
