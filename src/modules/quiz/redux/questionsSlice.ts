import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { AppThunk } from '../../../redux/store';
import { getQuestions } from '../api/questions';
import { GetQuestionsParams, GetQuestionsResult } from '../api/questions.types';
import { ChooseAnswerPayload, QuestionsState } from './questionsSlice.types';

// define state name so we don't need to repeat it
export const keyName = 'questions';

const questionsInitialState: QuestionsState = {
  currentPageQuestions: [],
  pageCount: 1,
  page: 0,
  isLoading: false,
  error: undefined,
  difficulty: 'hard',
  amount: 10,
  type: 'boolean',
  answers: [],
};

const questions = createSlice({
  name: keyName,
  initialState: questionsInitialState,
  reducers: {
    getQuestionsStart(state) {
      state.isLoading = true;
      state.currentPageQuestions = [];
      state.error = undefined;
    },
    getQuestionsSuccess(state, { payload }: PayloadAction<GetQuestionsResult>) {
      const { pageCount, results, page } = payload;

      state.pageCount = pageCount;
      state.page = page;
      state.isLoading = false;
      state.currentPageQuestions = results;
      state.error = undefined;
    },
    getQuestionsFailed(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
    addAnswer(state, { payload }: PayloadAction<ChooseAnswerPayload>) {
      const { index, answer } = payload;
      state.answers[index] = {
        answer,
        isCorrect: state.currentPageQuestions[index].correct_answer === answer,
      };
    },
    clearQuestions(state) {
      state.currentPageQuestions = [];
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
});

export default questions.reducer;

const fetchQuestions = (params: GetQuestionsParams): AppThunk => async dispatch => {
  try {
    dispatch(questionsActions.getQuestionsStart());
    const response = await getQuestions(params);
    dispatch(questionsActions.getQuestionsSuccess(response));
  } catch (err) {
    dispatch(questionsActions.getQuestionsFailed(err.toString()));
  }
};

export const answerQuestion = (
  payload: ChooseAnswerPayload,
  history: History,
): AppThunk => async (dispatch, getState) => {
  await dispatch(questionsActions.addAnswer(payload));

  const { questions } = getState();
  const { index } = payload;

  if (index + 1 >= questions.currentPageQuestions.length) {
    history.push('results');
  }
};

export const startQuiz = (history: History): AppThunk => async dispatch => {
  dispatch(questionsActions.clearAnswers());
  dispatch(questionsActions.clearQuestions());
  history.push('quiz');
};

export const playAgain = (history: History): AppThunk => async dispatch => {
  dispatch(questionsActions.clearAnswers());
  dispatch(questionsActions.clearQuestions());
  history.push('');
};

export const questionsActions = {
  ...questions.actions,
  fetchQuestions,
  answerQuestion,
  startQuiz,
  playAgain,
};
