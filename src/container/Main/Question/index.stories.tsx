import React from "react";
import { Question } from ".";
import { createQuestion } from "../index";

export default {
  title: "Main/Question",
  component: Question,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    q0: createQuestion(),
    q1: createQuestion(),
  };
  return <Question {...mockData} />;
};
