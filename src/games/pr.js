import { getRandomIntInclusive, game } from '../index.js';

export default () => {
  const textGame = 'What number is missing in the progression?';
  const totalRound = 3;
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, 9);
    const arr = [];
    arr[0] = number1;
    for (let n = 1; n < 10; n += 1) {
      arr[n] = arr[n - 1] + number2;
    }
    correctAnswer[i] = String(arr[delIndex]);
    arr[delIndex] = '..';
    question[i] = `Question: ${arr}`;
  }
  game(textGame, totalRound, question, correctAnswer);
};
