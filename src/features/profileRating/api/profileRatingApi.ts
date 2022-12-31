import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetProfileRatingsArgs {
  userId: string;
  profileId: string
}

interface RateProfileArgs {
  rate:number
  userId: string;
  profileId: string;
  feedback?: string;
}

const articlesRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRatings: build.query<Rating[], GetProfileRatingsArgs>({
      query: ({ profileId, userId }) => ({
        url: '/profile-ratings',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArgs>({
      query: (args) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),

});

export const useGetProfileRatings = articlesRatingApi.useGetProfileRatingsQuery;
export const { useRateProfileMutation } = articlesRatingApi;
