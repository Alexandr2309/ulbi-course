import { StateSchema } from 'app/providers/storeProvider';
import { getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
});
