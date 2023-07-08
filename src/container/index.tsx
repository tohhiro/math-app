import React from "react";
import "./styles.css";
import { useState } from "react";

type qqProps = {
  q: number;
};

export const Main = () => {
  const [qq, setQuestion] = useState<qqProps[]>([
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
      <div className="qContainer">
        <p className="q0" data-testid="q0">
          {qq[0].q}
        </p>
        <p>+</p>
        <p className="q1" data-testid="q1">
          {qq[1].q}
        </p>
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
