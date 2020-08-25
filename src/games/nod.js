import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default () => {
  let i = 0;
  while (i !== 3) {
    let number1 = getRandomIntInclusive(1, 30);
    let number2 = getRandomIntInclusive(1, 30);
    let correctAnswer = 1;
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    let nod = (number1 <= number2) ? number1 : number2;
    while ((number1 % nod) || (number2 % nod) !== 0)  {
        nod--;
      }
    correctAnswer = nod;
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
