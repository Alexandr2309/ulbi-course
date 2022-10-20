import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginError } from 'features/AuthByUsername';

describe('getLoginError', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema))
      .toBe('error');
  });
});
