import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../rnd.js';

export default () => {
  const questionGame = 'What is the result of the expression?';
  const roundsCount = getRound;
  const operations = ['-', '+', '*'];
  const questionsAnswers = []; // ['question','correctAnswer']
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const operation = operations[getRandomIntInclusive(0, (operations.length - 1))];
    const question = `${number1} ${operation} ${number2}`;
    let correctAnswer = '';
    switch (operation) {
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
        console.log('Operation it not Correct');
        break;
    }
    questionsAnswers[i] = [question, String(correctAnswer)];
  }
  playGame(questionGame, questionsAnswers);
};
