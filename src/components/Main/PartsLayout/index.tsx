import React, { PropsWithChildren } from 'react';
import classes from './index.module.css';

export const PartsLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.container}>{children}</div>
);
