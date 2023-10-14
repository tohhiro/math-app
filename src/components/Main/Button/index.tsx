import React from 'react';
import classes from './index.module.css';

type Props = {
  onClick: () => void;
  label: string;
  disabled: boolean;
};

export const Button: React.FC<Props> = (props: Props) => {
  const { onClick, label, disabled } = props;
  return (
    <button
      className={`${classes.button} ${
        label === 'Start'
          ? classes.buttonColor_start
          : label === '+'
          ? classes.buttonColor_plus
          : classes.buttonColor_reset
      } ${disabled ? classes.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
