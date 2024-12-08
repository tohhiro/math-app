import React from 'react';
import { Question, QuestionProps } from '.';

export default {
  title: 'Main/Question',
  component: Question,
};

export const Default: React.FC = () => {
  const defaultQuestion = '----' as QuestionProps;
  const mockData = {
    questions: [defaultQuestion, defaultQuestion],
  };
  return <Question {...mockData} />;
};

export const ShowQuestion: React.FC = () => {
  const mockData = {
    questions: [1234, 5678],
  };
  return <Question {...mockData} />;
};
