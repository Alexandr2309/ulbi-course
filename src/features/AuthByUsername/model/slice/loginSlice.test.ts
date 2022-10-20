import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '1' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('admin'),
    )).toEqual({ username: 'admin' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123123'),
    )).toEqual({ password: '123123' });
  });
});
