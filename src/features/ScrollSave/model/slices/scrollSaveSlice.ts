import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: scrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScroll: (state, { payload }: PayloadAction<{path: string, scroll: number}>) => {
      state.scroll[payload.path] = payload.scroll;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
