import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { UserComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import {
  fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  UserComment,
  string,
  ThunkApiConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
      const {
        extra,
        rejectWithValue,
        getState,
        dispatch,
      } = thunkApi;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !article || !text) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<UserComment>('/comments', {
          userId: userData.id,
          articleId: article.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
