import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPagesError,
  getArticlesPagesIsLoading,
  getArticlesPagesView,
} from '../../model/selectors/getArticlesPages';
import { initedArticlesPage } from '../../model/services/initedArticlesPage/initedArticlesPage';

export interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPagesError);
  const view = useSelector(getArticlesPagesView);
  const isLoading = useSelector(getArticlesPagesIsLoading);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  
  useInitialEffect(() => {
    dispatch(initedArticlesPage(searchParams));
  });

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view}
      target="_blank"
    />
  );
});
