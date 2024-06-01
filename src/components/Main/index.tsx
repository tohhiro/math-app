import React, { useState } from 'react';
import { useHeaderColor } from 'src/context/useHeaderColorContext';
import classes from './index.module.css';
import { Question, QuestionProps } from './Question';
import { Button } from './Button';
import { Timer } from './Timer';
import { PartsLayout } from './PartsLayout';
import { NumberButton } from './NumberButton';
import { DisplayValue } from './DisplayInputValue';
import { EnterButton } from './EnterButton';

type ButtonLabelType = 'Start' | 'Reset';

// NOTE: 4桁の問題を生成する（変更するとテストも修正が必用）
const digitNumber = 4;

export const createQuestion = (digit: number) => {
  const num = 10;
  const fourDigitNumber = Math.floor(Math.random() * num ** digit)
    .toString()
    .padEnd(digit, '0');
  return Number(fourDigitNumber);
};

const createQuestionRows = (
  rowNumber: number,
  isDefaultValue: boolean,
  digit: number,
) => {
  const defaultQuestion = new Array(digit).fill('-').join('') as QuestionProps;
  const questions: QuestionProps[] = [];
  for (let i = 0; i < rowNumber; i++) {
    if (isDefaultValue) {
      questions.push(defaultQuestion);
    } else {
      questions.push(createQuestion(digit));
    }
  }
  return questions;
};

export const Main: React.FC = () => {
  const [questions, setQuestion] = useState<QuestionProps[]>(
    createQuestionRows(2, true, digitNumber),
  );

  const [answer, setAnswer] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });
  const [btn, setBtn] = useState<ButtonLabelType>('Start');
  const [isStarting, setIsStarting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  // const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const headerColor = useHeaderColor();

  const calResetBtn = () => {
    if (btn === 'Start') {
      setBtn('Reset');
      setIsStarting(true);
      setIsDisabled(false);
      resetQuestion();
      headerColor.set('running');
      return;
    }

    onHandleReset();
  };

  const onHandleAnswer = () => {
    const calAnswer =
      typeof questions[0] === 'number' && typeof questions[1] === 'number'
        ? questions[0] + questions[1]
        : 0;

    if (calAnswer === Number(inputValue)) {
      setAnswer((prev) => ({
        correct: prev.correct + 1,
        incorrect: prev.incorrect,
      }));
    } else {
      setAnswer((prev) => ({
        correct: prev.correct,
        incorrect: prev.incorrect + 1,
      }));
    }
    resetQuestion();
    setInputValue('');
  };

  const resetQuestion = () => {
    setQuestion(createQuestionRows(2, false, digitNumber));
    setAnswer({ correct: 0, incorrect: 0 });
  };

  const onOverTime = () => {
    setIsDisabled(true);
    // eslint-disable-next-line no-alert
    confirm(`Correct: ${answer.correct}, Incorrect: ${answer.incorrect}`);
  };

  const onHandleReset = () => {
    // eslint-disable-next-line no-alert
    const isConfirm = confirm('Are you sure you want to reset?');
    if (isConfirm) {
      setBtn('Start');
      setIsStarting(false);
      setIsDisabled(true);
      setQuestion(createQuestionRows(2, true, digitNumber));
      setAnswer({ correct: 0, incorrect: 0 });
      setInputValue('');
      headerColor.set('stop');
    }
  };

  const onInputValues = (val: number | 'DEL') => {
    setInputValue((prev) => {
      if (val === 'DEL') {
        return prev.slice(0, -1);
      }
      return prev + String(val);
    });
  };

  return (
    <main className={classes.main}>
      <PartsLayout>
        <Timer isStarting={isStarting} onOverTime={onOverTime} />
      </PartsLayout>
      <PartsLayout>
        <Button onClick={calResetBtn} label={btn} />
      </PartsLayout>
      <Question questions={questions} />
      <PartsLayout>
        <DisplayValue value={inputValue} />
      </PartsLayout>
      <PartsLayout>
        <NumberButton onClick={onInputValues} disabled={isDisabled} />
      </PartsLayout>
      <PartsLayout>
        <EnterButton onClick={onHandleAnswer} disabled={isDisabled} />
      </PartsLayout>
    </main>
  );
};
