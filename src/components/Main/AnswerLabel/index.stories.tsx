import React from 'react';
import { AnswerLabel } from '.';

export default {
  title: 'Main/AnswerLabel',
  component: AnswerLabel,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    answer: null,
    count: 0,
  };

  return <AnswerLabel {...mockData} />;
};
export const Count3: React.FC = (): JSX.Element => {
  const mockData = {
    answer: 123,
    count: 3,
  };

  return <AnswerLabel {...mockData} />;
};
