import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticlesSortField, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticlesSortSelector } from 'features/ArticlesSortSelector';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import {
  fetchArticlesPage,
} from '../../model/services/fetchArticlesPage/fetchArticlesPage';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesFiltersPage.module.scss';
import {
  getArticlesPagesOrder, getArticlesPagesSearch, getArticlesPagesSort,
  getArticlesPagesView,
} from '../../model/selectors/getArticlesPages';

export interface ArticlesFiltersPageProps {
  className?: string;
}

export const ArticlesFiltersPage = memo((props: ArticlesFiltersPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPagesView);
  const order = useSelector(getArticlesPagesOrder);
  const sort = useSelector(getArticlesPagesSort);
  const search = useSelector(getArticlesPagesSearch);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesPage({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeSort = useCallback((newSort: ArticlesSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((value: string) => {
    dispatch(articlesPageActions.setSearch(value));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticlesFiltersPage, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector
          className={cls.viewSelector}
          onChangeView={onChangeView}
          view={view}
        />
      </div>
      <Card className={cls.search}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs
        className={cls.tabs}
      />
    </div>
  );
});
