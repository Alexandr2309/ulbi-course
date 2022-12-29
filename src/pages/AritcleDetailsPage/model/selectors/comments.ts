import { StateSchema } from '@/app/providers/storeProvider';

export const getArticleCommentsIsLoading = (
  state: StateSchema,
) => state.articlesDetailsPage?.comments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) => state.articlesDetailsPage?.comments?.error;
