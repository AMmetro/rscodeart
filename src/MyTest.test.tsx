import { testir } from './App';

describe('FizzBuzz', () => {
  test('[3] should result in "fizz"', () => {
    expect(testir(3, 4)).toBe('da');
  });
});
