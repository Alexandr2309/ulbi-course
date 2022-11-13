import { Currency } from 'entities/CurrencySelect/model/types/currency';
import { Country } from 'entities/CountrySelect/model/types/country';

export enum ValidateProfileErrors {
  INCORRECT_DATA = 'INCORRECT_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  NO_DATA = 'NO_DATA',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  id?: string;
  first?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[]
}
