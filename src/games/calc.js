import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const instruction = 'What is the result of the expression?';

const operatorArray = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unkown order state: '${operator}'!`);
  }
};

const startBrainCalc = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const index = getRandomNumber(0, operatorArray.length);
  const operator = operatorArray[index];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, answer];
};

export default () => {
  getGame(instruction, startBrainCalc);
};
