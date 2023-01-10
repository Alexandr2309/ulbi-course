import { StateSchema } from '@/app/providers/storeProvider';
import { useCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('return value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(useCounterValue()).toEqual(10);
  });
});
