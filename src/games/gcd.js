import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let GCD = 0;
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 || number2 !== 0) {
    if (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
    } else {
      GCD = number1 + number2;
      return GCD;
    }
  }
  GCD = number1 + number2;
  return GCD;
};

const startBrainGcd = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, answer];
};

export default () => {
  getGame(instruction, startBrainGcd);
};
