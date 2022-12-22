import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import {
  ArticleListItemSkeleton,
} from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 9)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
      key={index}
      view={view}
      className={cls.card}
    />
  ));

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
      className={cls.card}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
