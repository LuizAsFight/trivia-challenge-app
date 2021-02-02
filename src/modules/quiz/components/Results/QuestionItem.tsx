import styled from 'styled-components';

import AlienHandsDown from '../../../../assets/alien-hands-down.svg';
import AlienHandsUp from '../../../../assets/alien-hands-up.svg';
import { textColorFromBlackToFilter } from '../../../../tools/themeVariables';
import Question from '../../model/question';
import { Answer } from '../../redux/questionsSlice.types';

interface QuestionResultIconProps {
  isCorrect: boolean;
}

interface QuestionsListProps {
  question: Question;
  answer: Answer;
}

interface QuestionTextProps {
  isCorrect: boolean;
}

const QuestionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const QuestionResultIcon = styled.div<QuestionResultIconProps>`
  background-image: url(${props =>
    props.isCorrect ? AlienHandsUp : AlienHandsDown});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  opacity: ${props => (props.isCorrect ? '' : '0.5')};
  filter: ${textColorFromBlackToFilter};
`;

const QuestionText = styled.span<QuestionTextProps>`
  flex: 1;
  color: ${props => (props.isCorrect ? AlienHandsUp : AlienHandsDown)};
  font-weight: ${props => (props.isCorrect ? 'bold' : '')};
  font-size: ${props => (props.isCorrect ? '' : '18px')};
  line-height: ${props => (props.isCorrect ? '' : '20px')};
`;

const ResultsQuestionItem = ({ question, answer }: QuestionsListProps) => (
  <QuestionItemWrapper>
    <QuestionResultIcon isCorrect={answer.isCorrect} />
    <QuestionText
      dangerouslySetInnerHTML={{ __html: question.question }}
      isCorrect={answer.isCorrect}
    />
  </QuestionItemWrapper>
);

export default ResultsQuestionItem;
