import React from 'react';
import { useHeaderColor } from 'src/context/useHeaderColorContext';
import classes from './index.module.css';

export const Header: React.FC = () => {
  const { get } = useHeaderColor();
  return (
    <header
      className={`${classes.header}
      ${get() === 'running' ? classes.headerGreen : classes.headerRed}`}
    >
      暗算しましょう
    </header>
  );
};
