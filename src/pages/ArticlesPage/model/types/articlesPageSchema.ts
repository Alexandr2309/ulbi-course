import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticlesSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string;
  isLoading: boolean;

  page: number;
  limit: number;
  hasMore: boolean;

  //
  view: ArticleView;
  order: SortOrder;
  search: string;
  sort: ArticlesSortField
  type: ArticleType

  _inited: boolean;
}
