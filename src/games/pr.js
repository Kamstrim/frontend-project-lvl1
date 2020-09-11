import game from '../index.js';
import { getRandomIntInclusive } from '../storeFunction.js';

export default () => {
  const textGame = 'What number is missing in the progression?';
  const totalRound = 3;
  const introductory = []; // ['question','correctAnswer']
  const arr = [];
  const lengthArr = 10;
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, (lengthArr - 1));
    arr[0] = number1;
    for (let n = 1; n < lengthArr; n += 1) {
      arr[n] = arr[n - 1] + number2;
    }
    introductory[i] = [];
    introductory[i][1] = arr[delIndex];
    arr[delIndex] = '..';
    introductory[i][0] = `${arr}`;
  }
  game(textGame, introductory);
};
