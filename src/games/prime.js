import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

const isPrime = (num) => {
  if (num < 3) {
    return false;
  }
  for (let n = 2; n < num / 2; n += 1) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundsCount = getRound;
  const questionsAnswers = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomIntInclusive(1, 100);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    questionsAnswers[i] = [question, correctAnswer];
  }
  playGame(questionGame, questionsAnswers);
};
