import styled from 'styled-components';

import Question from '../../model/question';
import { Answer } from '../../redux/questionsSlice.types';
import ResultsQuestionItem from './QuestionItem';

interface QuestionsListProps {
  questions: Question[];
  answers: Answer[];
}

const QuestionsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ResultsQuestionsList = ({ questions, answers }: QuestionsListProps) => (
  <QuestionsListWrapper>
    {questions.map((question, i) => (
      <ResultsQuestionItem
        key={i + question.question}
        question={question}
        answer={answers[i]}
      />
    ))}
  </QuestionsListWrapper>
);

export default ResultsQuestionsList;
