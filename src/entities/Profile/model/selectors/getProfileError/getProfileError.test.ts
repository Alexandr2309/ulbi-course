import { StateSchema } from 'app/providers/storeProvider';
import { getProfileData, getProfileError } from 'entities/Profile';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import avatarTest from 'shared/assets/tests/test_ava.png';

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
