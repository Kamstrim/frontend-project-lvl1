import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default () => {
  console.log('Answer %c"yes" %cif the number is even, otherwise answer %c"no".', 'color: red;', 'font-weight:bold', 'color: red');
  let i = 0;
  while (i !== 3) {
    const number = getRandomIntInclusive(1, 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = ((number % 2) === 0) ? 'yes' : 'no';
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
