import React from 'react';
import { Button } from '.';

export default {
  title: 'Main/Button',
  component: Button,
};

export const Start: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Start',
    disabled: false,
  };

  return <Button {...mockData} />;
};

export const Reset: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: false,
  };

  return <Button {...mockData} />;
};

export const Disabled: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: 'Reset',
    disabled: true,
  };

  return <Button {...mockData} />;
};
