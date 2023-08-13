import React from "react";
import classes from "./index.module.css";
import { useState } from "react";
import { Question } from "./Question";
import { Button } from "./Button";
import { AnswerLabel } from "./AnswerLabel";
import { Timer } from "./Timer";
import { QuestionProps } from "./Question";

export const createQuestion = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padEnd(4, "0");
  return Number(fourDigitNumber);
};

export const Main: React.FC = () => {
  const [qq, setQuestion] = useState<QuestionProps[]>(["----", "----"]);

  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState("Start");
  const [isStart, setIsStart] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const calResetBtn = () => {
    if (btn === "Start") {
      setBtn("+");
      setIsStart(true);
      resetQuestion();
    }
    if (btn === "+") {
      plusAnswer();
      setBtn("Reset");
    }
    if (btn === "Reset") {
      resetQuestion();
      setBtn("+");
    }
  };

  const plusAnswer = () => {
    if (typeof qq[0] !== "number" || typeof qq[1] !== "number") return;
    const getAnswer = qq[0] + qq[1];
    setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion([createQuestion(), createQuestion()]);
    setAnswer(null);
  };

  const onOverTime = () => {
    setIsButton(true);
  };

  return (
    <main>
      <Timer isStart={isStart} onOverTime={onOverTime} />
      <Question q0={qq[0]} q1={qq[1]} />
      <div className={classes.container}>
        <Button onClick={calResetBtn} label={btn} disabled={isButton} />
      </div>
      <div className={classes.container}>
        <AnswerLabel answer={answer} />
      </div>
    </main>
  );
};
