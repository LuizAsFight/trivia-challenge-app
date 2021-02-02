import React from 'react';
import styled from 'styled-components';

import { backgroundColor, textColor } from '../../../tools/themeVariables';
import { TPossibleThemes } from '../redux/themesSlice';
import Star from '../../../assets/star.png';

interface ThemeButtonProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 3px;
  right: 3px;
  border: 1px solid ${textColor};
  background-color: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarIcon = styled.div`
  background-image: url(${Star});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 16px;
  height: 16px;
`;

const Results = ({ onClick }: ThemeButtonProps) => (
  <Button onClick={onClick}>
    <StarIcon />
  </Button>
);

export default Results;
