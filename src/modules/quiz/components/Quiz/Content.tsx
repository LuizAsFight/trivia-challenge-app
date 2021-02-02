import Question from '../../model/question';
import { CenteredSection } from '../common';

interface ContentQuizProps {
  question: Question;
  questionsAmount: number;
  currentQuestionIndex: number;
}

const ContentQuiz = ({
  question,
  currentQuestionIndex,
  questionsAmount,
}: ContentQuizProps) => (
  <CenteredSection>
    <span dangerouslySetInnerHTML={{ __html: question.question }} />
    <span>
      {currentQuestionIndex + 1} of {questionsAmount}
    </span>
  </CenteredSection>
);

export default ContentQuiz;
