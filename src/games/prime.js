import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const isPrime = (number) => {
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

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startBrainPrime = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => { runGame(instruction, startBrainPrime); };
