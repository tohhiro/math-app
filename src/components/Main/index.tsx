import React, { useCallback, useState } from 'react';
import { useHeaderColor } from 'src/context/useHeaderColorContext';
import { createQuestionRows } from 'src/components/Main/helper/createQuestionRows';
import classes from './index.module.css';
import { Question, QuestionProps } from './Question';
import { StartResetButton } from './StartResetButton';
import { Timer } from './Timer';
import { PartsLayout } from './PartsLayout';
import { NumberButton } from './NumberButton';
import { DisplayInputValue } from './DisplayInputValue';
import { EnterButton } from './EnterButton';
import { DisplayResult } from './DisplayResult';

type ButtonLabelType = 'Start' | 'Reset';

// NOTE: 4桁の問題を生成する（変更するとテストも修正が必用）
const digitNumber = 4;
const NoDisplayValue = 'PRESS NUMBERS';
const NotStartValue = 'PRESS START';

export const Main: React.FC = () => {
  const [questions, setQuestion] = useState<QuestionProps[]>(
    createQuestionRows({
      rowNumber: 2,
      isDefaultValue: true,
      digit: digitNumber,
    }),
  );

  const [answer, setAnswer] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });
  const [btn, setBtn] = useState<ButtonLabelType>('Start');
  const [isStarting, setIsStarting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(NotStartValue);
  const [isInit, setIsInit] = useState(false);

  const headerColor = useHeaderColor();

  const resetQuestion = useCallback(() => {
    setQuestion(
      createQuestionRows({
        rowNumber: 2,
        isDefaultValue: true,
        digit: digitNumber,
      }),
    );
  }, [setQuestion, digitNumber]);

  const onReset = useCallback(() => {
    setBtn('Start');
    setIsStarting(false);
    setIsDisabled(true);
    setQuestion(
      createQuestionRows({
        rowNumber: 2,
        isDefaultValue: true,
        digit: digitNumber,
      }),
    );
    setInputValue(NotStartValue);
    headerColor.set('stop');
  }, [
    setBtn,
    setIsStarting,
    setIsDisabled,
    setQuestion,
    setInputValue,
    headerColor,
  ]);

  const onHandleReset = useCallback(() => {
    // eslint-disable-next-line no-alert
    const isConfirm = confirm('Are you sure you want to reset?');
    if (isConfirm) {
      setAnswer({ correct: 0, incorrect: 0 });
      onReset();
    }
  }, [setAnswer, onReset]);

  const calResetBtn = useCallback(() => {
    if (btn === 'Start') {
      setBtn('Reset');
      setIsInit(true);
      setIsStarting(true);
      setIsDisabled(false);
      resetQuestion();
      setAnswer({ correct: 0, incorrect: 0 });
      headerColor.set('running');
      return;
    }
    onHandleReset();
  }, [
    setBtn,
    setIsInit,
    setIsStarting,
    setIsDisabled,
    setAnswer,
    onHandleReset,
    btn,
    resetQuestion,
    headerColor.set,
  ]);

  const onHandleAnswer = useCallback(() => {
    const calAnswer =
      typeof questions[0] === 'number' && typeof questions[1] === 'number'
        ? questions[0] + questions[1]
        : 0;

    if (calAnswer === Number(inputValue)) {
      setAnswer((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setAnswer((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    resetQuestion();
    setInputValue(NoDisplayValue);
  }, [inputValue, questions, setAnswer, resetQuestion, setInputValue]);

  const onOverTime = useCallback(() => {
    setIsDisabled(true);
    onReset();
  }, [setIsDisabled, onReset]);

  const onInputValues = useCallback(
    (val: number | 'DEL') => {
      setInputValue((prev) => {
        if (val === 'DEL' && prev.match(/[0-9]/)) {
          return prev.slice(0, -1);
        }
        if (
          prev.includes(NoDisplayValue) ||
          prev.includes(NotStartValue) ||
          val !== 'DEL'
        ) {
          return String(val);
        }
        return prev + String(val);
      });
    },
    [setInputValue],
  );

  return (
    <main className={classes.main}>
      <PartsLayout>
        <Timer isStarting={isStarting} onOverTime={onOverTime} />
      </PartsLayout>

      <PartsLayout>
        <StartResetButton onClick={calResetBtn} label={btn} />
      </PartsLayout>

      <PartsLayout>
        {!isStarting && isInit ? (
          <DisplayResult answer={answer} />
        ) : (
          <Question questions={questions} />
        )}
      </PartsLayout>

      <PartsLayout>
        <DisplayInputValue value={inputValue} />
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
