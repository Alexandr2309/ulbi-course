import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { UserComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { RoutePath } from '@/shared/const/route';

export interface CommentCardProps {
  className?: string;
  comment: UserComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <VStack gap="8" max className={cls.header}>
          <Skeleton width={30} height={30} />
          <Skeleton width={100} height={16} className={cls.username} />
        </VStack>
        <Skeleton width={100} height={16} className={cls.text} />
      </VStack>
    );
  }

  return (
    <VStack gap="8" align="start" max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        <HStack gap="8">
          {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
          <Text className={cls.username} text={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
