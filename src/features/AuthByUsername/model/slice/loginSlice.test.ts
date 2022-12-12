import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

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
