import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  return (
    <Page className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </Page>
  );
});

export default ProfilePage;
