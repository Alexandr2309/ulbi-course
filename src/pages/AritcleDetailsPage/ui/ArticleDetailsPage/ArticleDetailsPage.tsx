import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { VStack } from 'shared/ui/Stack';
import { articlesDetailsPageReducer } from '../../model/slices';
import {
  fetchRecommendationsByArticle,
} from '../../model/services/fetchRecommendationsByArticle/fetchRecommendationsByArticle';
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import cls from './ArticleDetailsPage.module.scss';
import {
  addCommentForArticle,
} from '../../model/services/addCommentFromArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

export interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentsIsLoading);
  // const error = useSelector(getArticleCommentsError);
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoadingRecommendations = useSelector(getArticleRecommendationsIsLoading);
  const errorRecommendations = useSelector(getArticleRecommendationsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendationsByArticle());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text || ''));
  }, [dispatch]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" align="start">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text title={t('Комментарии')} className={cls.commentsTitle} />
          <ArticleList
            articles={recommendations}
            isLoading={isLoadingRecommendations}
            className={cls.recommendations}
            target="_blank"
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentsList
            comments={comments}
            isLoading={isLoading}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
