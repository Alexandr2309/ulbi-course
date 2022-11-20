import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articlesDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
