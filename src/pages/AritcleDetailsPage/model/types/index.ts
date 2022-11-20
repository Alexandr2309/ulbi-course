import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import {
  ArticlesDetailsRecommendationsSchema,
} from './articlesDetailsRecommendationsSchema';

export interface ArticlesDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticlesDetailsRecommendationsSchema
}
