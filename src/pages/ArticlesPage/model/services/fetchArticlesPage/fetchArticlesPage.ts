import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@/app/providers/storeProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPagesLimit,
  getArticlesPagesNum,
  getArticlesPagesOrder,
  getArticlesPagesSearch,
  getArticlesPagesSort,
  getArticlesPagesType,
} from '../../selectors/getArticlesPages';

interface fetchArticlesPageArgs {
  replace?: boolean
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
      const page = getArticlesPagesNum(getState());
      const order = getArticlesPagesOrder(getState());
      const search = getArticlesPagesSearch(getState());
      const sort = getArticlesPagesSort(getState());
      const type = getArticlesPagesType(getState());

      try {
        addQueryParams({
          order, sort, search, type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            q: search,
            type: type === ArticleType.ALL ? undefined : type,
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
