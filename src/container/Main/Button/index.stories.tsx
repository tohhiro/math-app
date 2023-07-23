import React from "react";
import { Button } from ".";

export default {
  title: "Main/Button",
  component: Button,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: "+",
  };

  return <Button {...mockData} />;
};

export const Reset: React.FC = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: "Reset",
  };

  return <Button {...mockData} />;
};
