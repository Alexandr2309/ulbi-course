import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { ValidateProfileErrors } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
  lastname: 'Коломыцкий',
  first: 'Саша',
  age: 18,
  username: 'Sasha23',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Хабаровск',
  avatar: '123',
};

describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('country empty', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  test('age incorrect', () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test('all errors', () => {
    const result = validateProfileData({ country: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
