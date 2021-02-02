import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// we can define types here since it's pretended to be forever a pretty small slicer
export type TPossibleThemes = 'light' | 'dark';
export interface ThemesState {
  theme: TPossibleThemes;
}

// define state name so we don't need to repeat it
export const keyName = 'themes';

const themesInitialState: ThemesState = {
  theme: 'dark',
};

const themes = createSlice({
  name: keyName,
  initialState: themesInitialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<TPossibleThemes>) {
      state.theme = payload;
    },
  },
});

export const themesActions = themes.actions;

export default themes.reducer;
