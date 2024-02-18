import React, { useState } from 'react';
import { useHeaderColor } from 'src/context/useHeaderColorContext';
import classes from './index.module.css';
import { Question, QuestionProps } from './Question';
import { Button } from './Button';
import { AnswerLabel } from './AnswerLabel';
import { Timer } from './Timer';
import { ResetButton } from './ResetButton';
import { PartsLayout } from './PartsLayout';

type ButtonLabelType = 'Start' | '+' | 'Reset';

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

const sumQuestions = (questions: QuestionProps[]) => {
  const total = questions.reduce((sum, element) => {
    if (typeof sum === 'number' && typeof element === 'number')
      return sum + element;
  }, 0);
  return total;
};

const checkArrayType = (questions: QuestionProps[]) => {
  const isQuestionType = questions.some(
    (question) => typeof question === 'number',
  );
  return isQuestionType;
};

export const Main: React.FC = () => {
  const [questions, setQuestion] = useState<QuestionProps[]>(
    createQuestionRows(2, true, digitNumber),
  );

  const [answer, setAnswer] = useState<number | null>(null);
  const [btn, setBtn] = useState<ButtonLabelType>('Start');
  const [isStarting, setIsStarting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const headerColor = useHeaderColor();

  const calResetBtn = () => {
    if (btn === 'Start') {
      setBtn('+');
      setIsStarting(true);
      resetQuestion();
      headerColor.set('running');
    }
    if (btn === '+') {
      plusAnswer();
      setBtn('Reset');
      setCount((prevCount) => prevCount + 1);
    }
    if (btn === 'Reset') {
      resetQuestion();
      setBtn('+');
    }
  };

  const plusAnswer = () => {
    if (!checkArrayType(questions)) return;
    const getAnswer = sumQuestions(questions);
    if (typeof getAnswer === 'number') setAnswer(getAnswer);
  };

  const resetQuestion = () => {
    setQuestion(createQuestionRows(2, false, digitNumber));
    setAnswer(null);
  };

  const onOverTime = () => {
    setIsDisabled(true);
  };

  const onHandleReset = () => {
    // eslint-disable-next-line no-alert
    const isConfirm = confirm('Are you sure you want to reset?');
    if (isConfirm) {
      setBtn('Start');
      setIsStarting(false);
      setIsDisabled(false);
      setCount(0);
      setQuestion(createQuestionRows(2, true, digitNumber));
      setAnswer(null);
      headerColor.set('stop');
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
        <ResetButton onClick={onHandleReset} disabled={!isStarting} />
      </PartsLayout>
    </main>
  );
};
