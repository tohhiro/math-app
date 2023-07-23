import React from "react";
import { Question } from ".";

export default {
  title: "Main/Question",
  component: Question,
};

export const Default: React.FC = (): JSX.Element => {
  const mockData = {
    q0: Math.floor(Math.random() * 10000),
    q1: Math.floor(Math.random() * 10000),
  };
  return <Question {...mockData} />;
};
