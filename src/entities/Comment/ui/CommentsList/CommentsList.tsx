import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
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
    <div className={classNames(cls.CommentsList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
            className={cls.comment}
          />
        ))
        : <Text text={t('Комментарии не найдены')} className={cls.title} />}
    </div>
  );
});
