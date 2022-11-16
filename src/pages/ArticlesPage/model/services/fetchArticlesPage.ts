import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Article } from 'entities/Article';

export const fetchArticlesPage = createAsyncThunk<Article[],
  string | undefined,
  ThunkApiConfig<string>>(
    'articlesPage/fetchArticlesPage',
    async (_, thunkApi) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi;

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
          },
        });

        console.log(response);
        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
