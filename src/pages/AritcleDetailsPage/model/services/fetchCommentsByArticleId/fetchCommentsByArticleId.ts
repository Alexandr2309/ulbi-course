import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@/app/providers/storeProvider';
import { UserComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  UserComment[],
  string | undefined,
  ThunkApiConfig<string>
  >(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi;

      if (!articleId) {
        return rejectWithValue('error');
      }

      try {
        const response = await extra.api.get<UserComment[]>('/comments', {
          params: {
            articleId,
            _expand: 'user',
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
