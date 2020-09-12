import game from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

export default () => {
  const textGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const totalRound = 3;
  const introductory = []; // ['question','correctAnswer']
  for (let i = 0; i < totalRound; i += 1) {
    const number = getRandomIntInclusive(1, 30);
    introductory[i] = [];
    introductory[i][0] = number;
    introductory[i][1] = ((number % 2) === 0) ? 'yes' : 'no';
  }
  game(textGame, introductory);
};
