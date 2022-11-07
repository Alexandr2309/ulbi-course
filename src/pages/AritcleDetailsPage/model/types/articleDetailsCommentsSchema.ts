import { EntityState } from '@reduxjs/toolkit';
import { UserComment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<UserComment>{
  isLoading?: boolean;
  error?: string
}
