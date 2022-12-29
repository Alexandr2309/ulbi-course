import { StateSchema } from '@/app/providers/storeProvider';
import { Country } from '@/entities/CountrySelect';
import { Currency } from '@/entities/CurrencySelect';
import { getProfileData } from './getProfileData';

const data = {
  lastname: 'Коломыцкий',
  first: 'Саша',
  age: 18,
  username: 'Sasha23',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Хабаровск',
};

describe('getProfileData', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: undefined,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
