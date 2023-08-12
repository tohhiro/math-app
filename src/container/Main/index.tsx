import React from "react";
import classes from "./index.module.css";
import { useState } from "react";
import { Question } from "./Question";
import { Button } from "./Button";
import { AnswerLabel } from "./AnswerLabel";
import { Timer } from "./Timer";

const createQuestion = () => {
  const fourDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padEnd(4, "0");
  return Number(fourDigitNumber);
};

export const Main: React.FC = () => {
  const [qq, setQuestion] = useState([
    { q: createQuestion() },
    { q: createQuestion() },
  ]);

  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState("Start");
  const [isStart, setIsStart] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const calResetBtn = () => {
    if (btn === "Start") {
      setBtn("+");
      setIsStart(true);
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
    const getAnswer = qq[0].q + qq[1].q;
    setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion([{ q: createQuestion() }, { q: createQuestion() }]);
    setAnswer(null);
  };

  const onOverTime = () => {
    setIsButton(true);
  };

  const durationInMs = 1000 * 60 * 1; // 10分

  return (
    <main>
      <Timer
        durationInMs={durationInMs}
        isStart={isStart}
        onOverTime={onOverTime}
      />
      <Question q0={qq[0].q} q1={qq[1].q} />
      <div className={classes.container}>
        <Button onClick={calResetBtn} label={btn} disabled={isButton} />
      </div>
      <div className={classes.container}>
        <AnswerLabel answer={answer} />
      </div>
    </main>
  );
};
