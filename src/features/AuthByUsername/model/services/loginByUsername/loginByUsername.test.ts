import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
  loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

describe('loginByUsername', () => {
  test('success result', async () => {
    const userValue = {
      username: '123',
      id: '1',
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '123123' });

    expect(result.payload).toEqual(userValue);
    expect(thunk.api.post).toBeCalled();
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error result', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123123' });

    expect(result.payload).toBe('error');
    expect(thunk.api.post).toBeCalled();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
