import forAllGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const controlEven = (number) => number % 2 === 0;

const planGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const logicGame = () => {
  const number = getRandomNumber(1, 100);
  const answer = controlEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  forAllGame(planGame, logicGame);
};
