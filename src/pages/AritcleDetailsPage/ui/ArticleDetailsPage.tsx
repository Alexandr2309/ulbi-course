import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/AritcleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentFromArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentsIsLoading);
  // const error = useSelector(getArticleCommentsError);
  const comments = useSelector(getArticleComments.selectAll);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text || ''));
  }, [dispatch]);

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          comments={comments}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
