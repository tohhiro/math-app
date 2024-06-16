import React from 'react';
import { StartResetButton } from '.';

export default {
  title: 'Main/StartResetButton',
  component: StartResetButton,
};

export const Start: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Start',
    disabled: false,
  };

  return <StartResetButton {...mockData} />;
};

export const Reset: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: false,
  };

  return <StartResetButton {...mockData} />;
};

export const Disabled: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: true,
  };

  return <StartResetButton {...mockData} />;
};
