import  getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const planGame = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let GCD = 0;
  while(num1 != 0 || num2 != 0){
  if(num1 !=0 && num2 != 0){
    if(num1 > num2){
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
      }
  } else {
    GCD = num1 + num2;
    return GCD;
    }
  } 
   GCD = num1 + num2;
   return GCD;
}; 


  const beginGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, answer];
};

export default () => {
  getGame(planGame, beginGame);
};
