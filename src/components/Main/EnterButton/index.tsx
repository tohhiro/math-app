import React from 'react';
import classes from './index.module.css';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const EnterButton = React.memo(({ onClick, disabled }: Props) => (
  <button
    className={`${classes.button} ${
      disabled ? classes.disabled : classes.enabled
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    Enter
  </button>
));

EnterButton.displayName = 'EnterButton';
