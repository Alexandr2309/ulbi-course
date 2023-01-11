import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/storeProvider';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
  function useSelectorHook() {
    return useSelector(selector);
  }

  return [useSelectorHook, selector];
}
