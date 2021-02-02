import Question, { TQuestionDifficulties, TQuestionTypes } from '../model/question';

export interface GetQuestionsParams {
  amount: number;
  difficulty: TQuestionDifficulties;
  type: TQuestionTypes;
}

export interface GetQuestionResponse {
  response_code: number;
  results: Question[];
}

export interface GetQuestionsResult {
  pageCount: number;
  page: number;
  results: Question[];
}
