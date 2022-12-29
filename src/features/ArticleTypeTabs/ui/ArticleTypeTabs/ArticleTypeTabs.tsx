import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { getArticlesPagesType } from '@/pages/ArticlesPage/model/selectors/getArticlesPages';
import {
  fetchArticlesPage,
} from '@/pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleType } from '@/entities/Article';
import cls from './ArticleTypeTabs.module.scss';

export interface ArticleTypeTabsProps {
  className?: string;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className } = props;
  const type = useSelector(getArticlesPagesType);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onChangeType = useCallback((tab: TabItem) => {
    dispatch(articlesPageActions.setType(tab.value as ArticleType));
    dispatch(articlesPageActions.setPage(1));
    dispatch(fetchArticlesPage({ replace: true }));
  }, [dispatch]);

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  return (
    <Tabs
      tabs={typeTabs}
      value={type}
      onTabClick={onChangeType}
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
    />
  );
});
