import { CenteredSection, GameButton, Title } from '../common';
import GameOverSrc from '../../../../assets/game-over.png';
import styled from 'styled-components';
import { imageColorFromBlackToWhite } from '../../../../tools/themeVariables';

interface ErrorQuizProps {
  error: string;
  onClickTryAgain: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const GameOver = styled.div`
  background-image: url(${GameOverSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  filter: ${imageColorFromBlackToWhite};
`;

const ErrorCenteredSection = styled(CenteredSection)`
  min-width: 200px;
`;

const ErrorQuiz = ({ error, onClickTryAgain }: ErrorQuizProps) => (
  <>
    <Title>API Error: {error}</Title>
    <ErrorCenteredSection>
      <GameOver />
    </ErrorCenteredSection>
    <GameButton onClick={onClickTryAgain}>TRY AGAIN</GameButton>
  </>
);

export default ErrorQuiz;
