import React from "react";
import { Button } from ".";

export default {
  title: "Main/Button",
  component: Button,
};

export const Default = (): JSX.Element => {
  const mockData = {
    onClick: () => {},
    label: "test",
  };

  return <Button {...mockData} />;
};
