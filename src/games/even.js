import { getRandomIntInclusive, game } from '../index.js';

export default () => {
  const textGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const totalRound = 3;
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    question[i] = `Question: ${number1}`;
    correctAnswer[i] = ((number1 % 2) === 0) ? 'yes' : 'no';
  }
  game(textGame, totalRound, question, correctAnswer);
};
