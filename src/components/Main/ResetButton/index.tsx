import React from 'react';
import classes from './index.module.css';

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export const ResetButton: React.FC<Props> = (props: Props) => {
  const { onClick, disabled } = props;
  return (
    <button className={classes.button} disabled={disabled} onClick={onClick}>
      リセット
    </button>
  );
};
