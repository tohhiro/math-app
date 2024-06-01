import React from 'react';
import classes from './index.module.css';

type Props = {
  value: string;
};

export const DisplayValue: React.FC<Props> = ({ value }) => (
  <div className={classes.container}>{value}</div>
);
