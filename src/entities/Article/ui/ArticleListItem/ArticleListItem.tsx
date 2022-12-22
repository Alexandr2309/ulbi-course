import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';

export interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  target: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { t } = useTranslation();
  const {
    className,
    article,
    view = ArticleView.SMALL,
    target,
  } = props;

  const types = <Text text={article?.type?.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <AppLink
        target={target}
        to={RoutePath.article_details + article.id}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} className={cls.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          <div className={cls.footer}>
            <Button
              theme={ThemeButton.OUTLINED}
            >
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </AppLink>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
};
