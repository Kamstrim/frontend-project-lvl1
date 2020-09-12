import game from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

const nod = (num1, num2) => {
  let result = (num1 <= num2) ? num1 : num2;
  while ((num1 % result) || (num2 % result) !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const textGame = 'Find the greatest common divisor of given numbers.';
  const totalRound = 3;
  const introductory = []; // ['question','correctAnswer']
  for (let i = 0; i < totalRound; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    introductory[i] = [];
    introductory[i][0] = `${number1} ${number2}`;
    introductory[i][1] = nod(number1, number2);
  }
  game(textGame, introductory);
};
