import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Home from '../components/Home';
import { questionsActions } from '../redux/questionsSlice';
import ThemeContainer from '../../theme/containers/Theme';

// View component
const HomeContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <ThemeContainer />
      <Home onClickBegin={() => dispatch(questionsActions.startQuiz(history))} />
    </>
  );
};

export default HomeContainer;
