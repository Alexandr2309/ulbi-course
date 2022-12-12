import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import {
  Article, ArticlesSortField, ArticleType, ArticleView,
} from 'entities/Article';
import { VIEW_ARTICLES_LOCALSTORAGE_ITEM } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
import {
  fetchArticlesPage,
} from '../services/fetchArticlesPage/fetchArticlesPage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    error: undefined,
    isLoading: true,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    order: 'asc',
    search: '',
    sort: ArticlesSortField.TITLE,
    type: ArticleType.ALL,
  }),
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_ARTICLES_LOCALSTORAGE_ITEM, action.payload);
      state.limit = state.view === ArticleView.SMALL ? 9 : 4;
    },
    initView: (state) => {
      state.view = localStorage.getItem(VIEW_ARTICLES_LOCALSTORAGE_ITEM) as ArticleView;
      state.limit = state.view === ArticleView.SMALL ? 9 : 4;
      state._inited = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    })
      .addCase(
        fetchArticlesPage.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.hasMore = action.payload.length >= state.limit;
          if (action.meta.arg.replace) {
            articlesAdapter.setAll(state, action.payload);
          } else {
            articlesAdapter.addMany(state, action.payload);
          }
        },
      )
      .addCase(fetchArticlesPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
