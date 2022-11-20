import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import {
  ArticlesDetailsRecommendationsSchema,
} from 'pages/AritcleDetailsPage/model/types/articlesDetailsRecommendationsSchema';
import {
  fetchRecommendationsByArticle,
} from 'pages/AritcleDetailsPage/model/services/fetchRecommendationsByArticle/fetchRecommendationsByArticle';
import { Article } from 'entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articlesDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticlesDetailsRecommendationsSchema>({
    error: undefined,
    isLoading: true,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendationsByArticle.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
      .addCase(
        fetchRecommendationsByArticle.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          recommendationsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchRecommendationsByArticle.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
