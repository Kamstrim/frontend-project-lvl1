import game from '../index.js';
import { getRandomIntInclusive } from '../storeFunction.js';

const primeNumber = (num) => {
  let n = 2;
  while (num % n !== 0) {
    n += 1;
  }
  return (n === num) ? 'yes' : 'no';
};

export default () => {
  const textGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const totalRound = 3;
  const introductory = []; // ['question','correctAnswer']
  for (let i = 0; i < totalRound; i += 1) {
    const number = getRandomIntInclusive(1, 100);
    introductory[i] = [];
    introductory[i][0] = number;
    introductory[i][1] = primeNumber(number);
  }
  game(textGame, introductory);
};
