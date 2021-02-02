import styled from 'styled-components';
import theme from 'styled-theming';
import {
  primaryFontFamily,
  secondaryFontFamily,
  textColor,
} from '../../../../tools/themeVariables';

const greenButtonBackgroundColor = theme('mode', {
  light: '#7efd7e',
  dark: '#1b631b',
});

export const GameButton = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 20px;
  border: none;
  margin: 0;
  padding: 12px 16px;
  cursor: pointer;
  align-self: stretch;
  text-align: center;
  background-color: ${greenButtonBackgroundColor};
  color: ${textColor};
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding-top: 16px;
`;

export const QuizWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const QuizCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 1023px;
  font-family: ${secondaryFontFamily};
`;

export const CenteredSection = styled.div`
  font-family: ${primaryFontFamily};
  font-size: 20px;
  line-height: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 16px;
`;
