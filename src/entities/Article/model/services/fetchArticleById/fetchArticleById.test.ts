import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
  fetchArticleById,
} from './fetchArticleById';

describe('fetchArticleById', () => {
  test('success result', async () => {
    const data = {
      id: '1',
      title: 'JavaScript',
    };

    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(result.payload).toEqual(data);
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error result', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('');

    expect(result.payload).toBe('error');
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });

  test('error result with empty data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));
    const result = await thunk.callThunk('23');

    expect(result.payload).toBe('error');
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
