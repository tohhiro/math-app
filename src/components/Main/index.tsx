import React, { useState, useCallback } from 'react';
import { useHeaderColor } from 'src/context/useHeaderColorContext';
import { createQuestionRows } from 'src/components/Main/helpers/createQuestionRows';
import classes from './index.module.css';
import { Question, QuestionProps } from './Question';
import { StartAndResetButton } from './StartAndResetButton';
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

  const onToggleStartAndReset = useCallback(() => {
    if (btn === 'Start') {
      setBtn('Reset');
      setIsInit(true);
      setIsStarting(true);
      setIsDisabled(false);
      onCreateQuestion();
      setAnswer({ correct: 0, incorrect: 0 });
      headerColor.set('running');
      return;
    }
    onHandleReset();
  }, [btn]);

  const onJudgementAnswer = useCallback(() => {
    const calAnswer =
      typeof questions[0] === 'number' && typeof questions[1] === 'number'
        ? questions[0] + questions[1]
        : 0;

    if (calAnswer === Number(inputValue)) {
      setAnswer((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setAnswer((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    onCreateQuestion();
    setInputValue(NoDisplayValue);
  }, [inputValue, questions]);

  const onCreateQuestion = useCallback(() => {
    setQuestion(
      createQuestionRows({
        rowNumber: 2,
        isDefaultValue: false,
        digit: digitNumber,
      }),
    );
  }, [setQuestion]);

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
  }, [setIsStarting, setBtn, setQuestion, setInputValue, headerColor]);

  const onOverTime = useCallback(() => {
    setIsDisabled(true);
    onReset();
  }, [setIsDisabled, onReset]);

  const onHandleReset = useCallback(() => {
    // eslint-disable-next-line no-alert
    const isConfirm = confirm('リセットしてもいいですか？');
    if (isConfirm) {
      setAnswer({ correct: 0, incorrect: 0 });
      onReset();
    }
  }, [onReset]);

  const onInputYourAnswer = useCallback(
    (val: number | 'DEL') => {
      setInputValue((prev) => {
        if (val === 'DEL') {
          return prev.slice(0, -1);
        }
        if (prev.includes(NoDisplayValue) || prev.includes(NotStartValue)) {
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
        <StartAndResetButton onClick={onToggleStartAndReset} label={btn} />
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
        <NumberButton onClick={onInputYourAnswer} disabled={isDisabled} />
      </PartsLayout>

      <PartsLayout>
        <EnterButton onClick={onJudgementAnswer} disabled={isDisabled} />
      </PartsLayout>
    </main>
  );
};
