import { StateSchema } from 'app/providers/storeProvider';
import { ArticlesSortField, ArticleType, ArticleView } from 'entities/Article';

export const getArticlesPagesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPagesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPagesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPagesNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPagesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPagesLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPagesInited = (state: StateSchema) => state.articlesPage?._inited;

export const getArticlesPagesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticlesSortField.TITLE;
export const getArticlesPagesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPagesSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPagesType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
