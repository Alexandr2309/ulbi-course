import { StateSchema } from 'app/providers/storeProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../selectors/articleDetails';

describe('articleDetails', () => {
  test('data full', () => {
    const data = {
      id: '1',
      title: 'TypeScript',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
        isLoading: false,
        error: '123',
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('data full', () => {
    const data = {
      id: '1',
      title: 'TypeScript',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
        isLoading: false,
        error: '123',
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
  test('data full', () => {
    const data = {
      id: '1',
      title: 'TypeScript',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
        isLoading: false,
        error: '123',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toBe('123');
  });
  test('data empty', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: undefined,
        isLoading: false,
        error: '123',
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
  });
});
