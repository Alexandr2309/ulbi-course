import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useRateProfileMutation, useGetProfileRatings } from '../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
  className?: string
  profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;

  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetProfileRatings({ profileId, userId: userData?.id || '' });
  const [rateProfile] = useRateProfileMutation();

  const onHandleRate = useCallback((starNumber: number, feedback?: string) => {
    try {
      rateProfile({
        rate: starNumber,
        feedback,
        profileId,
        userId: userData?.id || '',
      });
    } catch (e) {
      console.log(e);
    }
  }, [profileId, rateProfile, userData?.id]);

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
      title={t('Оцените профиль')}
      hasFeedback
      feedbackTitle={t('Оставьте отзыв о профиле')}
      className={className}
    />
  );
});
