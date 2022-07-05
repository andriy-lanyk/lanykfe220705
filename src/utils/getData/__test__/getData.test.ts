import getData from '../getData';
import getRandomNumber from '../../getRandomNumber/getRandomNumber';

it('Function return object with need values', () => {
  const deal = getRandomNumber();
  const checkOut = getRandomNumber();
  const configurator = getRandomNumber();
  const landingPage = getRandomNumber();
  const result = getData(deal, checkOut, configurator, landingPage);
  expect(result).toBeDefined();
  expect(result[3].time).toBe(deal);
  expect(result[2].time).toBe(checkOut);
  expect(result[1].time).toBe(configurator);
  expect(result[0].time).toBe(landingPage);
});
