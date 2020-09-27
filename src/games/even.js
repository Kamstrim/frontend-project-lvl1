import { playGame, roundsCount } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answersQuestions = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomIntInclusive(1, 30);
    const correctAnswer = ((question % 2) === 0) ? 'yes' : 'no';
    answersQuestions[i] = [question, correctAnswer];
  }
  playGame(gameQuestion, answersQuestions);
};
