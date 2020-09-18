import { playGame, getRound } from '../index.js';
import getRandomIntInclusive from '../storeFunction.js';

export default () => {
  const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundCount = getRound();
  const initialQuestionsAnswers = []; // ['question','correctAnswer']
  let question = '';
  let correctAnswer = '';
  for (let i = 0; i < roundCount; i += 1) {
    const number = getRandomIntInclusive(1, 30);
    question = number;
    correctAnswer = ((number % 2) === 0) ? 'yes' : 'no';
    initialQuestionsAnswers[i] = [];
    initialQuestionsAnswers[i][0] = question;
    initialQuestionsAnswers[i][1] = correctAnswer;
  }
  playGame(questionGame, initialQuestionsAnswers);
};
