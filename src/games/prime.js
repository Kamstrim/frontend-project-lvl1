import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i !== 3) {
    const number1 = getRandomIntInclusive(1, 100);
    console.log(`Question: ${number1}`);
    const answer = readlineSync.question('Your answer: ');
    let n = 2;
    while (number1 % n !== 0) {
      n += 1;
    }
    const correctAnswer = (n === number1) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
};
