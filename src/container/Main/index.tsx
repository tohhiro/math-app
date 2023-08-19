import React from "react";
import classes from "./index.module.css";
import { useState } from "react";
import { Question } from "./Question";
import { Button } from "./Button";
import { AnswerLabel } from "./AnswerLabel";
import { Timer } from "./Timer";
import { QuestionProps } from "./Question";
import { ResetButton } from "./ResetButton";

type ButtonLabelType = "Start" | "+" | "Reset";

export const createQuestion = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padEnd(4, "0");
  return Number(fourDigitNumber);
};

export const Main: React.FC = () => {
  const [question, setQuestion] = useState<{
    questionLeft: QuestionProps;
    questionRight: QuestionProps;
  }>({
    questionLeft: "----",
    questionRight: "----",
  });
  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState<ButtonLabelType>("Start");
  const [isStart, setIsStart] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [count, setCount] = useState(0);

  const calResetBtn = () => {
    if (btn === "Start") {
      setBtn("+");
      setIsStart(true);
      resetQuestion();
    }
    if (btn === "+") {
      plusAnswer();
      setBtn("Reset");
      setCount((prevCount) => prevCount + 1);
    }
    if (btn === "Reset") {
      resetQuestion();
      setBtn("+");
    }
  };

  const plusAnswer = () => {
    if (
      typeof question.questionLeft !== "number" ||
      typeof question.questionRight !== "number"
    )
      return;
    const getAnswer = question.questionLeft + question.questionRight;
    setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion({
      questionLeft: createQuestion(),
      questionRight: createQuestion(),
    });
    setAnswer(null);
  };

  const onOverTime = () => {
    setIsButton(true);
  };

  const onHandleReset = () => {
    setBtn("Start");
    setIsStart(false);
    setIsButton(false);
    setCount(0);
    setQuestion({ questionLeft: "----", questionRight: "----" });
  };

  return (
    <main>
      <Timer isStart={isStart} onOverTime={onOverTime} />
      <Question
        questionLeft={question.questionLeft}
        questionRight={question.questionRight}
      />
      <div className={classes.container}>
        <Button onClick={calResetBtn} label={btn} disabled={isButton} />
      </div>
      <div className={classes.container}>
        <AnswerLabel answer={answer} count={count} />
      </div>
      <div>
        <ResetButton onClick={onHandleReset} />
      </div>
    </main>
  );
};
