import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startforAllGames = (planGame, beginGame) => {
   console.log('Welcome to the Brain Games!');
   const userName = readlineSync.question('May I have your name?  ');
   console.log(`Hello, ${userName}!`);
   console.log(planGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = beginGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startforAllGames;

