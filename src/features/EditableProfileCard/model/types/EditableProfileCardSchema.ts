import { Profile } from '@/entities/Profile';

export enum ValidateProfileErrors {
  INCORRECT_DATA = 'INCORRECT_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  NO_DATA = 'NO_DATA',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[]
}
