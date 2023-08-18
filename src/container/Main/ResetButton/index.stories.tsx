import React from "react";
import { ResetButton } from ".";

export default {
  title: "Main/ResetButton",
  component: ResetButton,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
  };

  return <ResetButton {...mockData} />;
};
