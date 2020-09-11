import game from '../index.js';
import { getRandomIntInclusive } from '../storeFunction.js';

export default () => {
  const textGame = 'What is the result of the expression?';
  const totalRound = 3;
  const logicalExp = ['-', '+', '*'];
  const introductory = []; // ['question','correctAnswer']
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const randExp = getRandomIntInclusive(0, (logicalExp.length - 1));
    introductory[i] = [];
    introductory[i][0] = `${number1} ${logicalExp[randExp]} ${number2}`;
    switch (randExp) {
      case 0:
        introductory[i][1] = number1 - number2;
        break;
      case 1:
        introductory[i][1] = number1 + number2;
        break;
      default:
        introductory[i][1] = number1 * number2;
        break;
    }
  }
  game(textGame, introductory);
};
