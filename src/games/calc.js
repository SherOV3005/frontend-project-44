import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const planGame = 'What is the result of the expression?';

const signArray = ['+', '-', '*'];

const getCalc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
    return 0;
  }
};

const beginGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const index = getRandomNumber(0, signArray.length);
  const sign = signArray[index];
  const question = `${num1} ${sign} ${num2}`;
  const answer = getCalc(num1, num2, sign);
  return [question, answer];
};

export default () => {
  getGame(planGame, beginGame);
};
