import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

export default () => {
  const questionGame = 'What is the result of the expression?';
  const roundCount = getRound();
  const Operations = ['-', '+', '*'];
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  let question = '';
  let correctAnswer = '';
  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const genOperation = Operations[getRandomIntInclusive(0, (Operations.length - 1))];
    question = `${number1} ${genOperation} ${number2}`;
    switch (genOperation) {
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '+':
        correctAnswer = number1 + number2;
        break;
      default: // '*'
        correctAnswer = number1 * number2;
        break;
    }
    initialQuestionsAnswers[i] = [];
    initialQuestionsAnswers[i][0] = question;
    initialQuestionsAnswers[i][1] = String(correctAnswer);
  }
  playGame(questionGame, initialQuestionsAnswers);
};
