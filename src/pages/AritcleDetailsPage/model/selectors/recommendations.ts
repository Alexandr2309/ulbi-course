import { StateSchema } from '@/app/providers/storeProvider';

export const getArticleRecommendationsIsLoading = (
  state: StateSchema,
) => state.articlesDetailsPage?.recommendations.isLoading || false;

export const getArticleRecommendationsError = (state: StateSchema) => state.articlesDetailsPage?.recommendations.error;
