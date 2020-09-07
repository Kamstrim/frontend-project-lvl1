import { getRandomIntInclusive, game } from '../index.js';

export default () => {
  const textGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const totalRound = 3;
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < totalRound; i += 1) {
    const number = getRandomIntInclusive(1, 100);
    question[i] = `Question: ${number}`;
    let n = 2;
    while (number % n !== 0) {
      n += 1;
    }
    correctAnswer[i] = (n === number) ? 'yes' : 'no';
  }
  game(textGame, totalRound, question, correctAnswer);
};
