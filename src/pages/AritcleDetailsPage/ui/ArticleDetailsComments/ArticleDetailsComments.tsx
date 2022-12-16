import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentsList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsComments.module.scss';
import {
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  fetchRecommendationsByArticle,
} from '../../model/services/fetchRecommendationsByArticle/fetchRecommendationsByArticle';
import {
  addCommentForArticle,
} from '../../model/services/addCommentFromArticle/addCommentForArticle';

export interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendationsByArticle());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text || ''));
  }, [dispatch]);

  return (
    <VStack gap="8" max className={classNames('', {}, [className])}>
      <Text title={t('Комментарии')} className={cls.commentsTitle} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentsList
        comments={comments}
        isLoading={isLoading}
      />
    </VStack>
  );
});
