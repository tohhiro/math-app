import React from "react";
import { Timer } from ".";

export default {
  title: "Main/Timer",
  component: Timer,
};

export const Default: React.FC = (): JSX.Element => {
  const durationInMs = 1000 * 60 * 10; // 10分
  const isStart = false;
  return <Timer durationInMs={durationInMs} isStart={isStart} />;
};
