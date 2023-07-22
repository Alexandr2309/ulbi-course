import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articlesDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlags, toggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/Card";

export interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

  const articleRating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id!} />,
    off: () => <Card>{t('Оценка статьи скоро появится ')}</Card>
  })

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" align="start">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRating}
          {isArticleRatingEnabled && <ArticleRating articleId={id} />}
          <ArticleRecommendationsList className={cls.recommendations} />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
