import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { fetchProfileData } from './fetchProfileData';

const data = {
  lastname: 'Коломыцкий',
  first: 'Саша',
  age: 18,
  username: 'Sasha23',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Хабаровск',
};

describe('fetchProfileData', () => {
  test('success result', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(result.payload).toEqual(data);
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error result', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.payload).toBe('error');
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });

  test('error result with empty data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));
    const result = await thunk.callThunk('1');

    expect(result.payload).toBe('error');
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
