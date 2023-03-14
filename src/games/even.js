import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const getControlEven = (number) => number % 2 === 0;

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const number = getRandomNumber(1, 100);
  const answer = getControlEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(instruction, generateRoundData);
};
