import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticlesRatings, useRateArticle } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;

  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticlesRatings({ articleId, userId: userData?.id || '' });
  const [rateArticle] = useRateArticle();

  const onHandleRate = useCallback((starNumber: number, feedback?: string) => {
    try {
      rateArticle({
        rate: starNumber,
        feedback,
        articleId,
        userId: userData?.id || '',
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticle, userData?.id]);

  const onAccept = useCallback((starNumber: number, feedback?: string) => {
    onHandleRate(starNumber, feedback);
  }, [onHandleRate]);

  const onCancel = useCallback((starNumber: number) => {
    onHandleRate(starNumber);
  }, [onHandleRate]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Оцените статью')}
      hasFeedback
      feedbackTitle={t('Оставьте отзыв о статье')}
      className={className}
    />
  );
});

export default ArticleRating;
