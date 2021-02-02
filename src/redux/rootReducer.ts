import { combineReducers } from '@reduxjs/toolkit';
import * as modulesReducers from '../modules/reducers';
import themesReducer, {
  keyName as themesKeyName,
} from '../modules/theme/redux/themesSlice';

const rootReducer = combineReducers({
  ...modulesReducers.default,
  [themesKeyName]: themesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
