import  getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const planGame = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const factorsPrimeNum1 = [];
  const factorsPrimeNum2 = [];
  const factorsGsd = [];
  let numGsd = 1;
  for(let i = 2; i <= num1; i+= 1) {
    if(num1 % i == 0){
      factorsPrimeNum1.push(i);
      num1 = num1 / i;
      i-= 1;
      if (num1 == i)
        i-= 1;
    }
    for(let i = 2; i <= num2; i+= 1) {
    if(num2 % i == 0){
      factorsPrimeNum2.push(i);
      num2 = num2 / i;
      i-= 1;
      if (num2 == i)
        i-= 1;
    }
  
  }
  }

  if(factorsPrimeNum1.length <= factorsPrimeNum2.length){
    for (let i = 0; i < factorsPrimeNum1.length; i+= 1){
      for (let j = 0; j < factorsPrimeNum2.length; j+= 1){
        if(factorsPrimeNum1[i] == factorsPrimeNum2[j]){
          factorsGsd.push(factorsPrimeNum1[i])
          delete factorsPrimeNum2[j];
          break;
        }
      }
    }
  }
  else {
    for (let i = 0; i < factorsPrimeNum2.length; i+= 1){
      for (let j = 0; j < factorsPrimeNum1.length; j+= 1){
        if(factorsPrimeNum2[i] == factorsPrimeNum1[j]){
          factorsGsd.push(factorsPrimeNum2[i])
          delete factorsPrimeNum1[j];
          break;
        }
      }
    }
    
  }
 for (let i = 0; i < factorsGsd.length; i+= 1){
   numGsd = numGsd * factorsGsd[i];
 }
  
  return (numGsd);
  
}


  const logicGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, answer];
};

export default () => {
  getGame(planGame, logicGame);
};
