import { classNames } from './classNames';

describe('classNames', () => {
  test('only cls', () => {
    expect(classNames('App', {}, [])).toBe('App');
  });

  test('cls and additional', () => {
    expect(classNames('App', {}, ['theme'])).toBe('App theme');
  });

  test('with mods', () => {
    expect(classNames('App', { scrolled: true, hovered: true }, ['theme'])).toBe('App theme scrolled hovered');
  });

  test('with mods error', () => {
    expect(classNames('App', { scrolled: true, hovered: false }, ['theme'])).toBe('App theme scrolled');
  });

  test('with mods undefined', () => {
    expect(classNames('App', { scrolled: true, hovered: undefined }, ['theme'])).toBe('App theme scrolled');
  });
});
