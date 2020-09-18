import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

const isPrime = (num) => {
  let n = 2;
  while (num % n !== 0) {
    n += 1;
  }
  return (n === num);
};

export default () => {
  const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundCount = getRound();
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  let question = '';
  let correctAnswer = '';
  for (let i = 0; i < roundCount; i += 1) {
    const number = getRandomIntInclusive(1, 100);
    question = number;
    correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    initialQuestionsAnswers[i] = [];
    initialQuestionsAnswers[i][0] = question;
    initialQuestionsAnswers[i][1] = correctAnswer;
  }
  playGame(questionGame, initialQuestionsAnswers);
};
