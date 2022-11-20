import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/storeProvider';
import {
  fetchCommentsByArticleId,
} from 'pages/AritcleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<UserComment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articlesDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: undefined,
    isLoading: true,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<UserComment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
