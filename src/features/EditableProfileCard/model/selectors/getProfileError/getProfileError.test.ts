import { StateSchema } from '@/app/providers/storeProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('123');
  });
});
