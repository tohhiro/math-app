import React from 'react';
import { DisplayInputValue } from '.';

export default {
  title: 'Main/DisplayInputValue',
  component: DisplayInputValue,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    value: '1234',
  };

  return <DisplayInputValue {...mockData} />;
};
