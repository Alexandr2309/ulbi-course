import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Article } from 'entities/Article';
import { getArticlesPagesLimit } from 'pages/ArticlesPage/model/selectors/getArticlesPages';

interface fetchArticlesPageArgs {
  page: number
}

export const fetchArticlesPage = createAsyncThunk<Article[],
  fetchArticlesPageArgs,
  ThunkApiConfig<string>>(
    'articlesPage/fetchArticlesPage',
    async (args, thunkApi) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi;

      const limit = getArticlesPagesLimit(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: args.page,
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
