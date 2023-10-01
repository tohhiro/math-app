import React from "react";
import classes from "./index.module.css";
import { useHeaderColor } from "src/context/useHeaderColorContext";

export const Header: React.FC = () => {
  const headerColor = useHeaderColor();
  return (
    <header
      className={`${classes.header}
      ${
        headerColor.get() === "running"
          ? classes.headerGreen
          : classes.headerRed
      }`}
    >
      暗算しましょう。
    </header>
  );
};
