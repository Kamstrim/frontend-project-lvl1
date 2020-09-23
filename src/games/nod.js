import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

const getGcd = (num1, num2) => {
  let result = (num1 <= num2) ? num1 : num2;
  while ((num1 % result) || (num2 % result) !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const questionGame = 'Find the greatest common divisor of given numbers.';
  const roundsCount = getRound;
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const question = `${number1} ${number2}`;
    const correctAnswer = getGcd(number1, number2);
    initialQuestionsAnswers[i] = [question, String(correctAnswer)];
  }
  playGame(questionGame, initialQuestionsAnswers);
};
