import React from "react";
import classes from "./index.module.css";
import { useState } from "react";

export const Main: React.FC = () => {
  const [qq, setQuestion] = useState([
    { q: Math.floor(Math.random() * 9999) },
    { q: Math.floor(Math.random() * 9999) },
  ]);

  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState("+");

  const calResetBtn = () => {
    if (btn === "+") {
      plusAnswer();
      setBtn("Reset");
    } else {
      resetQuestion();
      setBtn("+");
    }
  };

  const plusAnswer = () => {
    const getAnswer = qq[0].q + qq[1].q;
    setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion([
      { q: Math.floor(Math.random() * 10000) },
      { q: Math.floor(Math.random() * 10000) },
    ]);
    setAnswer(null);
  };

  return (
    <main>
      <div className={classes.qContainer}>
        <p data-testid="q0">{qq[0].q}</p>
        <p>+</p>
        <p data-testid="q1">{qq[1].q}</p>
      </div>
      <div>
        <button onClick={calResetBtn}>{btn}</button>
      </div>
      <div>
        <label>Answer</label>
        <p data-testid="answer">{answer}</p>
      </div>
    </main>
  );
};
