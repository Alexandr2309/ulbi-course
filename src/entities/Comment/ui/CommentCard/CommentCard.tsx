import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { UserComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

export interface CommentCardProps {
  className?: string;
  comment: UserComment;
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={100} height={16} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={cls.username} text={comment.user.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
});
