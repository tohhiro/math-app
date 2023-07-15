import React from "react";
import { AnswerLabel } from ".";

export default {
  title: "Main/AnswerLabel",
  component: AnswerLabel,
};

export const Default = (): JSX.Element => {
  const mockData = {
    answer: 123,
  };

  return <AnswerLabel {...mockData} />;
};
