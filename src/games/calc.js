import { playGame, roundsCount } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const gameDescription = 'What is the result of the expression?';
  const operations = ['-', '+', '*'];
  const answersQuestions = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const randomOpertation = operations[getRandomIntInclusive(0, (operations.length - 1))];
    const question = `${number1} ${randomOpertation} ${number2}`;
    let correctAnswer = '';
    switch (randomOpertation) {
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        throw new Error(`Unknown operation: '${randomOpertation}'!`);
    }
    answersQuestions[i] = [question, String(correctAnswer)];
  }
  playGame(gameDescription, answersQuestions);
};
