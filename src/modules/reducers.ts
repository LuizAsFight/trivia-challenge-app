import questionsReducer, {
  keyName as questionsKeyName,
} from './quiz/redux/questionsSlice';

export default {
  [questionsKeyName]: questionsReducer,
};
