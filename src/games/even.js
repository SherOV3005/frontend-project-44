import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const isEven = (number) => number % 2 === 0;

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const startBrainEven = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => { runGame(instruction, startBrainEven); };
