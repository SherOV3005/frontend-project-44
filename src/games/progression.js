import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (firstNumber, length, step) => {
  const progression = [];
  let i = 1;
  let firstNumber1 = firstNumber;
  while (i <= length) {
    progression.push(firstNumber1);
    firstNumber1 += step;
    i += 1;
  }
  return progression;
};

const startBrainProgression = () => {
  const length = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const unkownElement = getRandomNumber(0, length);
  const progression = getProgression(firstNumber, length, step);
  const answer = progression[unkownElement];
  progression[unkownElement] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => { runGame(instruction, startBrainProgression); };
