import React from "react";
import classes from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const PartsLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
