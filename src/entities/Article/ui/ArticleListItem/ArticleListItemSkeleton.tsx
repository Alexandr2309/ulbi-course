import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'entities/Article/ui/ArticleListItem/ArticleListItem.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import {
  ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
    view = ArticleView.SMALL,
    className,
  } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton border="50%" width={30} height={30} className={cls.avatar} />
            <Skeleton width={80} height={16} className={cls.username} />
          </div>
          <Skeleton className={cls.title} />
          <Skeleton width={50} height={16} />
          <Skeleton className={cls.img} />
          <Skeleton height={250} className={cls.textBlock} />
          <div className={cls.footer}>
            <Skeleton width={100} height={60} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={160} height={16} />
        </div>
        <Skeleton width={150} height={20} className={cls.title} />
      </Card>
    </div>
  );
};
