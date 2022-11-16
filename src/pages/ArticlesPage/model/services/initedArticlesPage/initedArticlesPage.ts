import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Article } from 'entities/Article';
import {
  getArticlesPagesHasMore, getArticlesPagesInited, getArticlesPagesIsLoading,
  getArticlesPagesLimit,
  getArticlesPagesNum,
} from 'pages/ArticlesPage/model/selectors/getArticlesPages';
import articlesPage from 'pages/ArticlesPage/ui/ArticlesPage';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';

export const initedArticlesPage = createAsyncThunk<void,
  void,
  ThunkApiConfig<string>>(
    'articlesPage/initedArticlesPage',
    async (_, thunkApi) => {
      const { getState, dispatch } = thunkApi;

      const inited = getArticlesPagesInited(getState());

      if (!inited) {
        dispatch(articlesPageActions.initView());
        dispatch(fetchArticlesPage({ page: 1 }));
      }
    },
  );
