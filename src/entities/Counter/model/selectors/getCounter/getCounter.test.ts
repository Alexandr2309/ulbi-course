import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('test counter selector', () => {
    const initialState: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(initialState as StateSchema)).toEqual({ value: 10 });
  });
});
