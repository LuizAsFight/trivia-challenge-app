import React from 'react';
import styled from 'styled-components';
import ScrollArea from 'react-scrollbar';

import { GameButton, QuizCentered, QuizWrapper, Title } from '../common';
import { Answer } from '../../redux/questionsSlice.types';
import Question from '../../model/question';
import ResultsQuestionsList from './QuestionsList';
import { primaryFontFamily } from '../../../../tools/themeVariables';

interface ResultsProps {
  questions: Question[];
  answers: Answer[];
  onClickPlayAgain: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Content = styled.div`
  font-family: ${primaryFontFamily};
  font-size: 20px;
  line-height: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 16px;
`;

const Results = ({ onClickPlayAgain, questions, answers }: ResultsProps) => (
  <QuizWrapper>
    <QuizCentered>
      <Title>You scored</Title>
      <Title>{answers.filter(answer => answer.isCorrect).length} / 10</Title>
      <ScrollArea speed={0.8} horizontal={false}>
        <Content>
          <ResultsQuestionsList questions={questions} answers={answers} />
        </Content>
      </ScrollArea>
      <GameButton onClick={onClickPlayAgain}>PLAY AGAIN</GameButton>
    </QuizCentered>
  </QuizWrapper>
);

export default Results;
