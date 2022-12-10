import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileErrors } from '../../types/profile';
import {
  getProfileValidateErrors,
} from '../getProfileValidateErrors/getProfileValidateErrors';

describe('getPforileValidateErrors', () => {
  test('one error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileErrors.SERVER_ERROR],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test('three error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.SERVER_ERROR,
          ValidateProfileErrors.INCORRECT_DATA,
          ValidateProfileErrors.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.INCORRECT_DATA,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
