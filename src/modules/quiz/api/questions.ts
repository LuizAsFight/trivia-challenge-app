import axios from '../../../tools/axios';
import {
  GetQuestionResponse,
  GetQuestionsParams,
  GetQuestionsResult,
} from './questions.types';

export async function getQuestions(
  params: GetQuestionsParams,
): Promise<GetQuestionsResult> {
  try {
    const { data } = await axios.get<GetQuestionResponse>('/', { params });

    return {
      pageCount: 1,
      page: 0,
      results: data.results,
    };
  } catch (err) {
    throw err;
  }
}
