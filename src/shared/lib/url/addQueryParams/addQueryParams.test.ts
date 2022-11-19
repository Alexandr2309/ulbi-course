import { isUndefined } from 'util';
import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('success result', () => {
    const urlResult = getQueryParams({
      search: 'golang',
    });
    expect(urlResult).toBe('?search=golang');
  });

  test('two params', () => {
    const urlResult = getQueryParams({
      search: 'golang',
      order: 'asc',
    });
    expect(urlResult).toBe('?search=golang&order=asc');
  });

  test('with undefined value', () => {
    const urlResult = getQueryParams({
      search: 'golang',
      order: undefined,
    });
    expect(urlResult).toBe('?search=golang');
  });
});
