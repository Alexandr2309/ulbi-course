import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCALSTORAGE_ITEM } from 'shared/const/localStorage';

export interface LoginByUsernameProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      const userData = response.data;
      localStorage.setItem(USER_LOCALSTORAGE_ITEM, JSON.stringify(userData));
      thunkApi.dispatch(userActions.setAuthData(userData));

      return userData;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue('error');
    }
  },
);
