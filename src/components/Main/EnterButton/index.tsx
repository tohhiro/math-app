/* eslint-disable indent */
import React from 'react';
import classes from './index.module.css';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const EnterButton: React.FC<Props> = ({ onClick, disabled }) => (
  <button
    className={disabled ? classes.disabled : classes.button}
    onClick={!disabled && onClick}
    disabled={disabled}
  >
    Enter
  </button>
);
