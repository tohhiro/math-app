import React from 'react';
import { DisplayValue } from '.';

export default {
  title: 'Main/DisplayValue',
  component: DisplayValue,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    value: '1234',
  };

  return <DisplayValue {...mockData} />;
};
