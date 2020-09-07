import { getRandomIntInclusive, game } from '../index.js';

export default () => {
  const textGame = 'What is the result of the expression?';
  const totalRound = 3;
  const logicalExp = ['-', '+', '*'];
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const randExp = getRandomIntInclusive(0, 2);
    question[i] = `Question: ${number1} ${logicalExp[randExp]} ${number2}`;
    switch (randExp) {
      case 0:
        correctAnswer[i] = String(number1 - number2);
        break;
      case 1:
        correctAnswer[i] = String(number1 + number2);
        break;
      default:
        correctAnswer[i] = String(number1 * number2);
        break;
    }
  }
  game(textGame, totalRound, question, correctAnswer);
};
