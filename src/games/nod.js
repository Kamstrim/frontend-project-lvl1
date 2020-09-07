import { getRandomIntInclusive, game } from '../index.js';

export default () => {
  const textGame = 'Find the greatest common divisor of given numbers.';
  const totalRound = 3;
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    question[i] = `Question: ${number1} ${number2}`;
    let nod = (number1 <= number2) ? number1 : number2;
    while ((number1 % nod) || (number2 % nod) !== 0) {
      nod -= 1;
    }
    correctAnswer[i] = String(nod);
  }
  game(textGame, totalRound, question, correctAnswer);
};
