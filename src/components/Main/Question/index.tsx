import React from 'react';
import classes from './index.module.css';

export type QuestionProps = '--:--' | number;

type QuestionsProps = {
  questions: QuestionProps[];
};

export const Question = React.memo(({ questions }: QuestionsProps) => {
  const questionTestIds = ['questionLeft', 'questionRight'];

  return (
    <div className={classes.container}>
      {questions.map((question, index) => (
        <>
          <p key={questionTestIds[index]} data-testid={questionTestIds[index]}>
            {question}
          </p>
          {index < questions.length - 1 && <p key="+">+</p>}
        </>
      ))}
    </div>
  );
});

Question.displayName = 'Question';
