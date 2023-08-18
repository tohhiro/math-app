import React from "react";
import classes from "./index.module.css";

type Props = {
  onClick: () => void;
};

export const ResetButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      リセット
    </button>
  );
};
