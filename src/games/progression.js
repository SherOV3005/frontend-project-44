import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

  const instruction = 'What number is missing in the progression?';

  const getProgression = (firstNumber, lengthStep) => {
  const progression = [];
  let i = 1;
  while(i <= 10){
  progression.push(firstNumber);
  firstNumber = firstNumber + lengthStep;
  i = i + 1;
  }
  return progression;
}

  const generateRoundData = () => {
  const firstNumber = getRandomNumber(1, 10);
  const lengthStep = getRandomNumber(1, 10);
  const unkownElement = getRandomNumber(0, 9);
  const progressionQuestion = getProgression(firstNumber, lengthStep);   
  const answer = progressionQuestion[unkownElement];
  progressionQuestion[unkownElement] = '..';
  const question = progressionQuestion.join(' ');
  return [question, answer];
};

export default () => {
  getGame(instruction, generateRoundData);
};
