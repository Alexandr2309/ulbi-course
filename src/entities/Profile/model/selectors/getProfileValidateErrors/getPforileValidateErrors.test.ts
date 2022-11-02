import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import {
  getProfileValidateErrors,
} from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';

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
