import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const questionGame = 'What number is missing in the progression?';
  const roundsCount = getRound;
  const questionsAnswers = []; // ['question','correctAnswer']
  const numbers = [];
  numbers.length = 10;
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, (numbers.length - 1));
    for (let n = 0; n < (numbers.length - 1); n += 1) {
      numbers[n] = number1 + number2 * n;
    }
    const correctAnswer = numbers[delIndex];
    numbers[delIndex] = '..';
    const question = `${numbers}`;
    questionsAnswers[i] = [question, String(correctAnswer)];
  }
  playGame(questionGame, questionsAnswers);
};
