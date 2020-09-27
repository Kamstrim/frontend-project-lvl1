import { playGame, roundsCount } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  const answersQuestions = []; // ['question','correctAnswer']
  const progressions = [];
  progressions.length = 10;
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionNumberFirst = getRandomIntInclusive(1, 30);
    const progressionStep = getRandomIntInclusive(1, 30);
    const positionDelete = getRandomIntInclusive(0, (progressions.length - 1));
    for (let n = 0; n < (progressions.length - 1); n += 1) {
      progressions[n] = progressionNumberFirst + progressionStep * n;
    }
    const correctAnswer = progressions[positionDelete];
    progressions[positionDelete] = '..';
    const question = String(progressions);
    answersQuestions[i] = [question, String(correctAnswer)];
  }
  playGame(gameDescription, answersQuestions);
};
