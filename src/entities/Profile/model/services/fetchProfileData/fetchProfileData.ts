import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const {
      extra,
      rejectWithValue,
    } = thunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
