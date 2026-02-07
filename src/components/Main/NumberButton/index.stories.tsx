import React from 'react';
import { NumberButton } from '.';

export default {
  title: 'Main/NumberButton',
  component: NumberButton,
};

export const Default: React.FC = () => {
  const mockData = {
    onClick: () => {},
    disabled: false,
  };

  return <NumberButton {...mockData} />;
};

export const Disabled: React.FC = () => {
  const mockData = {
    onClick: () => {},
    disabled: true,
  };

  return <NumberButton {...mockData} />;
};
