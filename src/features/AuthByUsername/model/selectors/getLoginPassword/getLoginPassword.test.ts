import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('success password ', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getLoginPassword(state as StateSchema))
      .toBe('123');
  });

  test('undefined password', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema))
      .toBe('');
  });
});
