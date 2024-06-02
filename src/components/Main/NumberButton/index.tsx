import React from 'react';
import classes from './index.module.css';

type ButtonType = number | 'DEL';

type Props = {
  onClick: (val: ButtonType) => void;
  disabled: boolean;
};

const numberButtons: ButtonType[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'DEL'];

export const NumberButton: React.FC<Props> = ({ onClick, disabled }) => (
  <div className={classes.container}>
    {numberButtons.map((button, idx) => (
      <div
        className={`${classes.button} ${
          disabled ? classes.disabled : classes.enabled
        }`}
        key={idx}
        onClick={() => !disabled && onClick(button)}
      >
        {button}
      </div>
    ))}
  </div>
);
