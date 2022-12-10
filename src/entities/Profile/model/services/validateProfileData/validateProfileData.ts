import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const {
    country,
    age,
    username,
    first,
    lastname,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!username || !first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_DATA);
  }

  if (!age || !Number.isInteger(age) || Number(age) < 1) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  return errors;
};
