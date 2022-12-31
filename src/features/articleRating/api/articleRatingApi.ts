import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticlesRatingsArgs {
  userId: string;
  articleId: string
}

interface RateArticleArgs {
  rate:number
  userId: string;
  articleId: string;
  feedback?: string;
}

const articlesRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatings: build.query<Rating[], GetArticlesRatingsArgs>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),

});

export const useGetArticlesRatings = articlesRatingApi.useGetArticleRatingsQuery;
export const useRateArticle = articlesRatingApi.useRateArticleMutation;
