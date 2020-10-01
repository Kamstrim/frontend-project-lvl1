import { playGame, roundsCount } from '../index.js';
import getRandomIntInclusive from '../randomIntInclusive.js';

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  const answersQuestions = []; // ['question','correctAnswer']
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionFirstNumber = getRandomIntInclusive(1, 30);
    const progressionStep = getRandomIntInclusive(1, 30);
    const progressionDelIndex = getRandomIntInclusive(0, (progressionLength- 1));
    for (let n = 0; n < (progressionLength - 1); n += 1) {
      progression[n] = progressionFirstNumber + progressionStep * n;
    }
    const correctAnswer = progression[progressionDelIndex];
    progression[progressionDelIndex] = '..';
    const question = String(progression);
    answersQuestions[i] = [question, String(correctAnswer)];
  }
  playGame(gameDescription, answersQuestions);
};
