function getRandomNumber():number {
  const MIN = 0.1;
  const MAX = 10;
  const randomNumber = Math.random() * (MAX - MIN + 1) + MIN;
  return Number(randomNumber.toFixed(1));
}

export default getRandomNumber;
