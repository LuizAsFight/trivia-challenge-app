import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { RootState } from '../redux/rootReducer';

const Theme: FunctionComponent = ({ children }) => {
  const theme = useSelector((state: RootState) => state.themes.theme);

  return <ThemeProvider theme={{ mode: theme }}>{children}</ThemeProvider>;
};

export default Theme;
