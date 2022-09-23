import { classNames } from './classNames';

describe('classNames', () => {
  test('only cls', () => {
    expect(classNames('app')).toBe('app');
  });

  test('with additional', () => {
    expect(classNames('app', {}, ['cls1', 'cls2']))
      .toBe('app cls1 cls2');
  });

  test('with mods', () => {
    expect(classNames(
      'app',
      { hovered: true, scrollable: true },
      ['cls1', 'cls2'],
    ))
      .toBe('app cls1 cls2 hovered scrollable');
  });

  test('with mods false', () => {
    expect(classNames(
      'app',
      { hovered: true, scrollable: false },
      ['cls1', 'cls2'],
    ))
      .toBe('app cls1 cls2 hovered');
  });

  test('with mode undefined', () => {
    expect(classNames(
      'app',
      { hovered: true, scrollable: undefined },
      ['cls1', 'cls2'],
    ))
      .toBe('app cls1 cls2 hovered');
  });
});
