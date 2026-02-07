import React, { memo } from 'react';
import classes from './index.module.css';

export type QuestionProps = '--:--' | number;

type QuestionsProps = {
  questions: QuestionProps[];
};

export const Question: React.FC<QuestionsProps> = memo(
  ({ questions }: QuestionsProps) => {
    const questionTestIds = ['questionLeft', 'questionRight'];

    return (
      <div className={classes.container}>
        {questions.map((question, index) => (
          <>
            <p key={question} data-testid={questionTestIds[index]}>
              {question}
            </p>
            {index < questions.length - 1 && <p>+</p>}
          </>
        ))}
      </div>
    );
  },
);
