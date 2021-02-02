import styled from 'styled-components';
import Question, { TPossibleAnswers } from '../../model/question';
import AnswersButtonItem from './AnswersButtonItem';

interface AnswersButtonListProps {
  question: Question;
  onChooseAnswer: ({
    answer,
    index,
  }: {
    answer: TPossibleAnswers;
    index: number;
  }) => void;
  currentQuestionIndex: number;
}

const AnswersButtonList = ({
  question,
  onChooseAnswer,
  currentQuestionIndex,
}: AnswersButtonListProps) => (
  <>
    {[...question.incorrect_answers, question.correct_answer]
      .sort()
      .map((answer, i) => (
        <AnswersButtonItem
          key={i + answer}
          answer={answer}
          currentQuestionIndex={currentQuestionIndex}
          onChooseAnswer={onChooseAnswer}
        />
      ))}
  </>
);

export default AnswersButtonList;
