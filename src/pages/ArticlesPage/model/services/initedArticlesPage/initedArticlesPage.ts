import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { getArticlesPagesInited } from 'pages/ArticlesPage/model/selectors/getArticlesPages';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import {
  fetchArticlesPage,
} from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { SortOrder } from 'shared/types';
import { ArticlesSortField, ArticleType } from 'entities/Article';

export const initedArticlesPage = createAsyncThunk<void,
  URLSearchParams,
  ThunkApiConfig<string>>(
    'articlesPage/initedArticlesPage',
    async (searchParams, thunkApi) => {
      const {
        getState,
        dispatch,
      } = thunkApi;

      const inited = getArticlesPagesInited(getState());

      if (!inited) {
        const orderField = searchParams.get('order');
        const sortField = searchParams.get('sort');
        const searchField = searchParams.get('search');
        const typeField = searchParams.get('type');

        if (orderField) {
          dispatch(articlesPageActions.setOrder(orderField as SortOrder));
        }
        if (sortField) {
          dispatch(articlesPageActions.setSort(sortField as ArticlesSortField));
        }
        if (searchField) {
          dispatch(articlesPageActions.setSearch(searchField));
        }
        if (typeField) {
          dispatch(articlesPageActions.setType(typeField as ArticleType));
        }

        dispatch(articlesPageActions.initView());
        dispatch(fetchArticlesPage({}));
      }
    }
    ,
  );
