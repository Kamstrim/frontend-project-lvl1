import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

const getGcd = (num1, num2) => {
  let result = (num1 <= num2) ? num1 : num2;
  while ((num1 % result) || (num2 % result) !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const questionGame = 'Find the greatest common divisor of given numbers.';
  const roundCount = getRound();
  let question = '';
  let correctAnswer = '';
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    question = `${number1} ${number2}`;
    correctAnswer = getGcd(number1, number2);
    initialQuestionsAnswers[i] = [];
    initialQuestionsAnswers[i][0] = question;
    initialQuestionsAnswers[i][1] = String(correctAnswer);
  }
  playGame(questionGame, initialQuestionsAnswers);
};
