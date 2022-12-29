import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading', () => {
  test('success username ', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };

    expect(getLoginUsername(state as StateSchema))
      .toBe('admin');
  });

  test('undefined username', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema))
      .toBe('');
  });
});
