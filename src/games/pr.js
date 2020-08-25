import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default () => {
  let i = 0;
  while (i !== 3) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, 9);
    const arr = [];
    arr[0] = number1;
    for (let n = 1; n < 10; i += 1) {
      arr[n] = arr[n - 1] + number2;
    }
    const correctAnswer = arr[delIndex];
    arr[delIndex] = '..';
    console.log(`Question: ${arr}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
};
