import React from "react";
import classes from "./index.module.css";

type Props = {
  onClick: () => void;
  label: string;
};

export const Button: React.FC<Props> = (props: Props) => {
  const { onClick, label } = props;
  return (
    <button
      className={`${classes.button} ${
        label === "+" ? classes.buttonColor_plus : classes.buttonColor_reset
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
