import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';

import ThemeButton from '../components/ThemeButton';
import { themesActions } from '../redux/themesSlice';

// View component
const ThemeContainer = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.themes);

  return (
    <ThemeButton
      onClick={() =>
        dispatch(themesActions.setTheme(theme === 'dark' ? 'light' : 'dark'))
      }
    />
  );
};

export default ThemeContainer;
