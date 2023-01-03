import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { VStack } from '@/shared/ui/Stack';

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id && __PROJECT__ !== 'storybook') return null;

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap="32">
        <EditableProfileCard />
        <ProfileRating profileId={id!} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
