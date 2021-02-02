// define model's types
export type TQuestionTypes = 'boolean' | 'string';
export type TQuestionDifficulties = 'easy' | 'normal' | 'hard';
export type TPossibleAnswers = 'True' | 'False' | string;

// define model's interface
export default interface Question {
  category: string;
  type: TQuestionTypes;
  difficulty: TQuestionDifficulties;
  question: string;
  correct_answer: TPossibleAnswers;
  incorrect_answers: TPossibleAnswers[];
}
