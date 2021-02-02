import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import ThemeContainer from '../../theme/containers/Theme';

import Quiz from '../components/Quiz';
import { questionsActions } from '../redux/questionsSlice';

// View component
const QuizContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionsState = useSelector((state: RootState) => state.questions);

  const {
    currentPageQuestions,
    isLoading,
    error,
    difficulty,
    amount,
    type,
  } = questionsState;

  useEffect(() => {
    dispatch(questionsActions.fetchQuestions({ amount, difficulty, type }));
  }, [amount, difficulty, type, dispatch]);

  const currentIndex = questionsState.answers.length;

  return (
    <>
      <ThemeContainer />
      <Quiz
        onChooseAnswer={({ answer, index }) =>
          dispatch(questionsActions.answerQuestion({ index, answer }, history))
        }
        onClickFailedTryAgain={() =>
          dispatch(questionsActions.fetchQuestions({ amount, difficulty, type }))
        }
        question={
          currentPageQuestions ? currentPageQuestions[currentIndex] : undefined
        }
        isLoading={isLoading}
        error={error}
        questionsAmount={amount}
        currentQuestionIndex={currentIndex}
      />
    </>
  );
};

export default QuizContainer;
