import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
  loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('success result', async () => {
    const userValue = {
      username: '123',
      id: '1',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123123' });

    expect(result.payload).toEqual(userValue);
    expect(mockedAxios.post).toBeCalled();
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error result', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123123' });

    expect(result.payload).toBe('error');
    expect(mockedAxios.post).toBeCalled();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
