import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

  const planeGame = 'What number is missing in the progression?';

  const getProgression = (firstNum, lengthStep) => {
  const progressionArr = [];
  let i = 1;
  while(i <= 10){
  progressionArr.push(firstNum);
  firstNum = firstNum + lengthStep;
  i = i + 1;
  }
  return progressionArr;
}

const logicGame = () => {
  const firstNum = getRandomNumber(1, 10);
  const lengthStep = getRandomNumber(1, 10);
  const unkownElement = getRandomNumber(0, 9);
  const progressionQuestion = getProgression(firstNum, lengthStep);   
  const answer = progressionQuestion[unkownElement];
  progressionQuestion[unkownElement] = '..';
  const question = progressionQuestion;
  return [question, answer];
};

export default () => {
  getGame(planeGame, logicGame);
};
