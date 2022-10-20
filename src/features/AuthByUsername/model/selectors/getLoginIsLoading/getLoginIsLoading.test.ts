import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginError, getLoginIsLoading } from 'features/AuthByUsername';

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
