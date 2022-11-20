import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Article } from 'entities/Article';

export const fetchRecommendationsByArticle = createAsyncThunk<Article[],
  void,
  ThunkApiConfig<string>>(
    'articlesDetailsPage/fetchRecommendationsByArticle',
    async (args, thunkApi) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi;

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _limit: 4,
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
