import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Article } from 'entities/Article';
import {
  getArticlesPagesHasMore, getArticlesPagesIsLoading,
  getArticlesPagesLimit,
  getArticlesPagesNum,
} from 'pages/ArticlesPage/model/selectors/getArticlesPages';
import articlesPage from 'pages/ArticlesPage/ui/ArticlesPage';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';

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
        dispatch(fetchArticlesPage({
          page: page + 1,
        }));
      }
    },
  );
