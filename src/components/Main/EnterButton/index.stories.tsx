import React from 'react';
import { EnterButton } from '.';

export default {
  title: 'Main/EnterButton',
  component: EnterButton,
};

export const Default: React.FC = () => {
  const mockData = {
    onClick: () => {},
    disabled: false,
  };

  return <EnterButton {...mockData} />;
};

export const Disabled: React.FC = () => {
  const mockData = {
    onClick: () => {},
    disabled: true,
  };

  return <EnterButton {...mockData} />;
};
