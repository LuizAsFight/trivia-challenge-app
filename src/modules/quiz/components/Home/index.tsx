import React from 'react';
import {
  CenteredSection,
  GameButton,
  QuizCentered,
  QuizWrapper,
  Title,
} from '../common';

const xxx = 0;

export interface HomeProps {
  onClickBegin: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Home = ({ onClickBegin }: HomeProps) => (
  <QuizWrapper>
    <QuizCentered>
      <Title>Welcome to the Trivia Challenge!</Title>
      <CenteredSection>
        <span>You will be presented with 10 True or False questions.</span>
        <span>Can you score 100% ?</span>
      </CenteredSection>
      <GameButton onClick={onClickBegin}>BEGIN</GameButton>
    </QuizCentered>
  </QuizWrapper>
);

export default Home;
