import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundsCount = getRound;
  const questionsAnswers = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomIntInclusive(1, 30);
    const correctAnswer = ((question % 2) === 0) ? 'yes' : 'no';
    questionsAnswers[i] = [question, correctAnswer];
  }
  playGame(questionGame, questionsAnswers);
};
