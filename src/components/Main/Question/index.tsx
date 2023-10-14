import React from 'react';
import classes from './index.module.css';

export type QuestionProps = '----' | number;

type QuestionsProps = {
  questions: QuestionProps[];
};

export const Question: React.FC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;
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
};
