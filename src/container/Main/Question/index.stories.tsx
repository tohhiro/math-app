import React from "react";
import { Question } from ".";

export default {
  title: "Main/Question",
  component: Question,
};

export const Default = (): JSX.Element => {
  const mockData = {
    q0: 123,
    q1: 456,
  };
  return <Question {...mockData} />;
};
