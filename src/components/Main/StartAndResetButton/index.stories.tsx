import React from 'react';
import { StartAndResetButton } from '.';

export default {
  title: 'Main/StartAndResetButton',
  component: StartAndResetButton,
};

export const Start: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Start',
    disabled: false,
  };

  return <StartAndResetButton {...mockData} />;
};

export const Reset: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: false,
  };

  return <StartAndResetButton {...mockData} />;
};

export const Disabled: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: true,
  };

  return <StartAndResetButton {...mockData} />;
};
