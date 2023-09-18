import React from "react";
import { Question, QuestionProps } from ".";
import { createQuestion } from "../index";

export default {
  title: "Main/Question",
  component: Question,
};

export const Default: React.FC = (): JSX.Element => {
  const defaultQuestion = "----" as QuestionProps;
  const mockData = {
    questions: [defaultQuestion, defaultQuestion],
  };
  return <Question {...mockData} />;
};

export const ShowQuestion: React.FC = (): JSX.Element => {
  const mockData = {
    questions: [createQuestion(), createQuestion()],
  };
  return <Question {...mockData} />;
};
