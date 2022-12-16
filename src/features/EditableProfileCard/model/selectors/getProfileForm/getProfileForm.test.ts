import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { getProfileForm } from './getProfileForm';

const data = {
  lastname: 'Коломыцкий',
  first: 'Саша',
  age: 18,
  username: 'Sasha23',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Хабаровск',
};

describe('getProfileForm', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: undefined,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
