import React from "react";
import classes from "./index.module.css";
import { useState } from "react";
import { Question } from "./Question";
import { Button } from "./Button";
import { AnswerLabel } from "./AnswerLabel";
import { Timer } from "./Timer";
import { QuestionProps } from "./Question";
import { ResetButton } from "./ResetButton";
import { PartsLayout } from "./PartsLayout";

type ButtonLabelType = "Start" | "+" | "Reset";

export const createQuestion = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padEnd(4, "0");
  return Number(fourDigitNumber);
};

export const Main: React.FC = () => {
  const defaultQuestion = "----";
  const [question, setQuestion] = useState<{
    questionLeft: QuestionProps;
    questionRight: QuestionProps;
  }>({
    questionLeft: defaultQuestion,
    questionRight: defaultQuestion,
  });
  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState<ButtonLabelType>("Start");
  const [isStarting, setIsStarting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const calResetBtn = () => {
    if (btn === "Start") {
      setBtn("+");
      setIsStarting(true);
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
    setIsDisabled(true);
  };

  const onHandleReset = () => {
    setBtn("Start");
    setIsStarting(false);
    setIsDisabled(false);
    setCount(0);
    setQuestion({
      questionLeft: defaultQuestion,
      questionRight: defaultQuestion,
    });
    setAnswer(null);
  };

  return (
    <main className={classes.main}>
      <Timer isStarting={isStarting} onOverTime={onOverTime} />
      <Question
        questionLeft={question.questionLeft}
        questionRight={question.questionRight}
      />
      <PartsLayout>
        <Button onClick={calResetBtn} label={btn} disabled={isDisabled} />
      </PartsLayout>
      <PartsLayout>
        <AnswerLabel answer={answer} count={count} />
      </PartsLayout>
      <PartsLayout>
        <ResetButton onClick={onHandleReset} />
      </PartsLayout>
    </main>
  );
};
