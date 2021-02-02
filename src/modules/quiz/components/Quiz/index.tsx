import React from 'react';
import styled from 'styled-components';
import {
  CenteredSection,
  GameButton,
  QuizCentered,
  QuizWrapper,
  Title,
} from '../common';
import Question, { TPossibleAnswers } from '../../model/question';
import LoadingQuiz from './Loading';
import ErrorQuiz from './Error';
import QuizContent from './Content';
import AnswersButtonList from './AnswersButtonList';

export interface QuizProps {
  onChooseAnswer: ({
    answer,
    index,
  }: {
    answer: TPossibleAnswers;
    index: number;
  }) => void;
  onClickFailedTryAgain: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  question?: Question;
  isLoading: boolean;
  error?: string;
  questionsAmount: number;
  currentQuestionIndex: number;
}

const Quiz = ({
  onChooseAnswer,
  onClickFailedTryAgain,
  question,
  isLoading,
  error,
  questionsAmount,
  currentQuestionIndex,
}: QuizProps) => (
  <QuizWrapper>
    <QuizCentered>
      {isLoading && <LoadingQuiz />}
      {error && !isLoading && (
        <ErrorQuiz error={error} onClickTryAgain={onClickFailedTryAgain} />
      )}
      {!error && !isLoading && question && (
        <>
          <Title>{question.category.normalize()}</Title>
          <QuizContent
            question={question}
            currentQuestionIndex={currentQuestionIndex}
            questionsAmount={questionsAmount}
          />
          <AnswersButtonList
            question={question}
            currentQuestionIndex={currentQuestionIndex}
            onChooseAnswer={onChooseAnswer}
          />
        </>
      )}
    </QuizCentered>
  </QuizWrapper>
);

export default Quiz;
