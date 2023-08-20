import React from "react";
import { Timer } from ".";

export default {
  title: "Main/Timer",
  component: Timer,
};

export const Default: React.FC = (): JSX.Element => {
  const mock = {
    isStarting: false,
    onOverTime: () => {},
  };

  return <Timer {...mock} />;
};
