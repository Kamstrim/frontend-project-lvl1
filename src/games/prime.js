import { playGame, roundsCount } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

const isPrime = (num) => {
  if (num < 2) {
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
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const answersQuestions = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomIntInclusive(1, 100);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    answersQuestions[i] = [question, correctAnswer];
  }
  playGame(gameDescription, answersQuestions);
};
