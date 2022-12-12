import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import {
  getArticlesPagesHasMore,
  getArticlesPagesIsLoading,
  getArticlesPagesNum,
} from '../../selectors/getArticlesPages';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import {
  fetchArticlesPage,
} from '../../services/fetchArticlesPage/fetchArticlesPage';

export const fetchNextArticlesPage = createAsyncThunk<void,
  void,
  ThunkApiConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
      const { getState, dispatch } = thunkApi;

      const page = getArticlesPagesNum(getState());
      const hasMore = getArticlesPagesHasMore(getState());
      const isLoading = getArticlesPagesIsLoading(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesPage({}));
      }
    },
  );
