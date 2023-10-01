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
import { useHeaderColor } from "src/context/useHeaderColorContext";

type ButtonLabelType = "Start" | "+" | "Reset";

export const createQuestion = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padEnd(4, "0");
  return Number(fourDigitNumber);
};

const createQuestionRows = (rowNumber: number, isDefaultValue: boolean) => {
  const defaultQuestion = "----";
  const questions: QuestionProps[] = [];
  for (let i = 0; i < rowNumber; i++) {
    if (isDefaultValue) {
      questions.push(defaultQuestion);
    } else {
      questions.push(createQuestion());
    }
  }
  return questions;
};

const sumQuestions = (questions: QuestionProps[]) => {
  let total = questions.reduce((sum, element) => {
    if (typeof sum === "number" && typeof element === "number")
      return sum + element;
  }, 0);
  return total;
};

const checkArrayType = (questions: QuestionProps[]) => {
  const isQuestionType = questions.some(
    (question) => typeof question === "number"
  );
  return isQuestionType;
};

export const Main: React.FC = () => {
  const [questions, setQuestion] = useState<QuestionProps[]>(
    createQuestionRows(2, true)
  );

  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState<ButtonLabelType>("Start");
  const [isStarting, setIsStarting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const headerColor = useHeaderColor();

  const calResetBtn = () => {
    if (btn === "Start") {
      setBtn("+");
      setIsStarting(true);
      resetQuestion();
      headerColor.set("running");
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
    if (!checkArrayType(questions)) return;
    const getAnswer = sumQuestions(questions);
    if (typeof getAnswer === "number") setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion(createQuestionRows(2, false));
    setAnswer(null);
  };

  const onOverTime = () => {
    setIsDisabled(true);
  };

  const onHandleReset = () => {
    const isConfirm = confirm("Are you sure you want to reset?");
    if (isConfirm) {
      setBtn("Start");
      setIsStarting(false);
      setIsDisabled(false);
      setCount(0);
      setQuestion(createQuestionRows(2, true));
      setAnswer(null);
      headerColor.set("stop");
    }
  };

  return (
    <main className={classes.main}>
      <Timer isStarting={isStarting} onOverTime={onOverTime} />
      <Question questions={questions} />
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
