import React from 'react';
import classes from './index.module.css';

type Props = {
  onClick: () => void;
  label: string;
};

export const Button: React.FC<Props> = ({ onClick, label }) => (
  <button
    className={`${classes.button} ${
      label === 'Start' ? classes.buttonColor_start : classes.buttonColor_reset
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);
