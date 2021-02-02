import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import ThemeContainer from '../../theme/containers/Theme';

import Results from '../components/Results';
import { questionsActions } from '../redux/questionsSlice';

// View component
const QuizContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentPageQuestions, answers } = useSelector(
    (state: RootState) => state.questions,
  );

  return (
    <>
      <ThemeContainer />
      <Results
        questions={currentPageQuestions}
        answers={answers}
        onClickPlayAgain={() => dispatch(questionsActions.playAgain(history))}
      />
    </>
  );
};

export default QuizContainer;
