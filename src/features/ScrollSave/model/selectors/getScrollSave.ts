import { StateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSaveScroll = (state: StateSchema) => state.scrollSave.scroll || 0;
export const getScrollSaveByPAth = createSelector(
  getScrollSaveScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path],
);
