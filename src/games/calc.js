import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default () => {
  let i = 0;
  while (i !== 3) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const logicalExp = ['-', '+', '*'];
    const rand = getRandomIntInclusive(0, 2);
    console.log(`Question: ${number1} ${logicalExp[rand]} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    if (rand === 0) {
      correctAnswer = number1 - number2;
    } else if (rand === 1) {
      correctAnswer = number1 + number2;
    } else {
      correctAnswer = number1 * number2;
    }
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
