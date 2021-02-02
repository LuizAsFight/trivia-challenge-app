import styled from 'styled-components';
import { TPossibleAnswers } from '../../model/question';
import { GameButton } from '../common';

interface ContentQuizProps {
  onChooseAnswer: ({
    answer,
    index,
  }: {
    answer: TPossibleAnswers;
    index: number;
  }) => void;
  currentQuestionIndex: number;
  answer: TPossibleAnswers;
}

const AnswerButtonWrapper = styled.div`
  align-self: stretch;
  margin: 8px 0;
`;

const AnswersButtonItem = ({
  onChooseAnswer,
  currentQuestionIndex,
  answer,
}: ContentQuizProps) => (
  <AnswerButtonWrapper>
    <GameButton
      onClick={() => onChooseAnswer({ answer, index: currentQuestionIndex })}
    >
      {answer}
    </GameButton>
  </AnswerButtonWrapper>
);

export default AnswersButtonItem;
