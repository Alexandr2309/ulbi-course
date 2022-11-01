import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { getProfileForm } from 'entities/Profile';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra,
      rejectWithValue,
      getState,
    } = thunkApi;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
