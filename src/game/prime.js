import forAllGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const getPrime = (number) => {
  let prime = 'true';
  let result = 'true';
  for (let i = 2; i < number; i+= 0){
  if (i <= Math.sqrt(number) && prime == 'true')
  {
    if(number % i == 0){
      prime = 'false';
      i++;
      }
    else {
      i++;
    }
  }      
   else if(prime == 'true'){
    result = 'yes'
    return result;
  } else {
    result = 'no';
    return result;
  }
    }
} 

const planGame ='Answer "yes" if given number is prime. Otherwise answer "no".';

const logicGame = () => {
  const number = getRandomNumber(1, 100);
  const answer = getPrime(number);
  return [number, answer];
};

export default () => {
  forAllGame(planGame, logicGame);
};
