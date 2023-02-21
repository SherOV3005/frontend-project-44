import forAllGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const planGame = 'What is the result of the expression?';

const signArray = ['+', '-', '*'];

const calc = (num1, num2, sign) => {
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

const logicGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const index = getRandomNumber(0, signArray.length);
  const sign = signArray[index];
  const question = `${num1} ${sign} ${num2}`;
  const answer = calc(num1, num2, sign);
  return [question, answer];
};

export default () => {
  forAllGame(planGame, logicGame);
};
