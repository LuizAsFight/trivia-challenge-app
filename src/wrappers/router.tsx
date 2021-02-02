import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from '../modules/quiz/containers/Home';
import QuizContainer from '../modules/quiz/containers/Quiz';
import ResultsContainer from '../modules/quiz/containers/Results';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/quiz" component={QuizContainer} />
        <Route exact path="/results" component={ResultsContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
