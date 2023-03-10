import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const getPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
  
const planGame ='Answer "yes" if given number is prime. Otherwise answer "no".';

const beginGame = () => {
  const number = getRandomNumber(1, 100);
  const answer = getPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(planGame, beginGame);
};
