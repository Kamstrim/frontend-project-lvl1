import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

export default () => {
  const questionGame = 'What number is missing in the progression?';
  const roundCount = getRound();
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  const numbers = [];
  const lenNumbers = 10;
  let question = '';
  let correctAnswer = '';
  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, (lenNumbers - 1));
    numbers[0] = number1;
    for (let n = 1; n < lenNumbers; n += 1) {
      numbers[n] = numbers[n - 1] + number2;
    }
    correctAnswer = numbers[delIndex];
    numbers[delIndex] = '..';
    question = `${numbers}`;
    initialQuestionsAnswers[i] = [];
    initialQuestionsAnswers[i][0] = question;
    initialQuestionsAnswers[i][1] = String(correctAnswer);
  }
  playGame(questionGame, initialQuestionsAnswers);
};
