import React from "react";
import classes from "./index.module.css";

type Props = {
  onClick: () => void;
  label: string;
};

export const Button: React.FC<Props> = (props: Props) => {
  const { onClick, label } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
};