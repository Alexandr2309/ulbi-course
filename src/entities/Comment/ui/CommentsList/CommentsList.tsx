import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { UserComment } from '../../model/types/comment';
import cls from './CommentsList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

export interface CommentsListProps {
  className?: string;
  comments: UserComment[];
  isLoading: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  return (
    <VStack gap="16" align="start" max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('Комментарии не найдены')} className={cls.title} />}
    </VStack>
  );
});
