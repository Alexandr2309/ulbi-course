import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import {
  useArticleRecommendations,
} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendations(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack gap="8" align="start" data-testid="ArticleRecommendationList">
      <Text size={TextSize.L} title={t('Рекомендуем')} />
      <ArticleList
        articles={articles}
        className={className}
        target="_blank"
      />
    </VStack>
  );
});
