import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginIsLoading } from '../getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('success isLoading ', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as StateSchema))
      .toBe(true);
  });

  test('undefined isLoading', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema))
      .toBe(false);
  });
});
