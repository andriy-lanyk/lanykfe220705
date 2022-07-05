import getRandomNumber from '../getRandomNumber';

const MIN = 0.1;
const MAX = 10;

it('Function return number', () => {
  const result = getRandomNumber();
  expect(result).toBeDefined();
  expect(result).toBeGreaterThanOrEqual(MIN);
  expect(result).toBeLessThanOrEqual(MAX);
});
