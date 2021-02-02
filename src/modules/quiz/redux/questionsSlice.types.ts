import Question, {
  TPossibleAnswers,
  TQuestionDifficulties,
  TQuestionTypes,
} from '../model/question';

export interface Answer {
  answer: TPossibleAnswers;
  isCorrect: boolean;
}

export interface QuestionsState {
  currentPageQuestions: Question[];
  pageCount: number;
  page: number;
  isLoading: boolean;
  error?: string;
  difficulty: TQuestionDifficulties;
  amount: number;
  type: TQuestionTypes;
  answers: Answer[];
}

export interface ChooseAnswerPayload {
  answer: TPossibleAnswers;
  index: number;
}
