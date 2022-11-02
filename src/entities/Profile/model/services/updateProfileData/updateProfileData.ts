import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { getProfileForm } from 'entities/Profile';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkApiConfig<ValidateProfileErrors[]>
  >(
    'profile/updateProfileData',
    async (_, thunkApi) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi;

      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>('/profile', formData);

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    },
  );
