import React from 'react';
import { DisplayResult } from '.';

export default {
  title: 'Main/DisplayResult',
  component: DisplayResult,
};

export const Default: React.FC = () => {
  const mockData = {
    answer: {
      correct: 0,
      incorrect: 0,
    },
  };

  return <DisplayResult {...mockData} />;
};
