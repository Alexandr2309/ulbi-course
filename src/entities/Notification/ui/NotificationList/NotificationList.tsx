import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 7000,
  });

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width="100%" border="50%" height={150} />
        <Skeleton width="100%" border="50%" height={150} />
        <Skeleton width="100%" border="50%" height={150} />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </VStack>
  );
});
