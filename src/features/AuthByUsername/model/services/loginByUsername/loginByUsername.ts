import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_ITEM } from 'shared/const/localStorage';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';

export interface LoginByUsernameProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkApiConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      // @ts-ignore
      const response = await extra.api.post('/login', authData);

      if (!response.data) {
        throw new Error();
      }
      const userData = response.data;
      localStorage.setItem(USER_LOCALSTORAGE_ITEM, JSON.stringify(userData));
      dispatch(userActions.setAuthData(userData));

      return userData;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
