import { StateSchema } from 'app/providers/storeProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPagesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPagesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPagesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPagesNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPagesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPagesLimit = (state: StateSchema) => state.articlesPage?.limit;
