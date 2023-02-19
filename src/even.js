import readlineSync from 'readline-sync';
const numberOfQuestions = 3;
const brainEven = () => {
console.log('Welkome to the Brain Games!');
const userName = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
 for (let i = 0; i < numberOfQuestions; i += 1) {
  const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}
   let numberRandom = getRandomInt(100);
   console.log(`Question: ${numberRandom}`);
   const userAnswer = readlineSync.question('Your answer: ');
   if (numberRandom % 2 == 0 && userAnswer == 'yes' ){
     let numberEven = 'yes';
     //console.log(numberRandom, numberEven);
     console.log('Correct!');
   }
   else if (numberRandom % 2 !== 0 && userAnswer == 'no')
   {
      let numberEven = 'no';
     // console.log(numberRandom, numberEven);
      console.log('Correct!');
 }
   else {
      console.log(`Let's try again, ${userName}!`);
     return;
   }
}
console.log(`Congratulations, ${userName}!`);
}
export default brainEven; 
