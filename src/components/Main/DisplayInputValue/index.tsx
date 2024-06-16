import React from 'react';
import classes from './index.module.css';

type Props = {
  value: string;
};

export const DisplayInputValue = React.memo(({ value }: Props) => (
  <div className={classes.container}>{value}</div>
));

DisplayInputValue.displayName = 'DisplayInputValue';
