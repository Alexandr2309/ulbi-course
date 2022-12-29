import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@/app/providers/storeProvider/config/stateSchema';
import { Profile } from '../../../../../entities/Profile/model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (id, thunkApi) => {
    const {
      extra,
      rejectWithValue,
    } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`/profile/${id}`);

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
