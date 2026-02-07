import { createQuestion } from '../createQuestion';

type Params = {
  rowNumber: number;
  isDefaultValue: boolean;
  digit: number;
};

type QuestionProps = '--:--' | number;

export const createQuestionRows = ({
  rowNumber,
  isDefaultValue,
  digit,
}: Params) => {
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
