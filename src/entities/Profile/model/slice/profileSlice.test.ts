import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import {
  profileActions, profileReducer,
} from '../slice/profileSlice';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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

describe('loginSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    ))
      .toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      form: {
        ...data,
        age: 1,
      },
      validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(true),
    ))
      .toEqual({
        readonly: true,
        form: data,
        validateErrors: undefined,
        data,
      });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data,
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: 'Александр' }),
    ))
      .toEqual({
        form: {
          ...data,
          username: 'Александр',
        },
      });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
      isLoading: false,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({
        validateErrors: undefined,
        isLoading: true,
      });
  });
});
