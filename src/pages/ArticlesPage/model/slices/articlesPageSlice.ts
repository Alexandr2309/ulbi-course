import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article, ArticleView } from 'entities/Article';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { VIEW_ARTICLES_LOCALSTORAGE_ITEM } from 'shared/const/localStorage';
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
  }),
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_ARTICLES_LOCALSTORAGE_ITEM, action.payload);
      state.limit = state.view === ArticleView.SMALL ? 9 : 4;
    },
    initView: (state) => {
      state.view = localStorage.getItem(VIEW_ARTICLES_LOCALSTORAGE_ITEM) as ArticleView;
      state.limit = state.view === ArticleView.SMALL ? 9 : 4;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesPage.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
      .addCase(
        fetchArticlesPage.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
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
