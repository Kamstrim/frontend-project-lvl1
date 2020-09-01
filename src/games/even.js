import { getRandomIntInclusive, inputName, inputAnswer, checkAnswer, finalText } from '../index.js';

export default () => {
  const name = inputName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const number = getRandomIntInclusive(1, 30);
    console.log(`Question: ${number}`);
    const answer = inputAnswer();
    const correctAnswer = ((number % 2) === 0) ? 'yes' : 'no';
    result = (checkAnswer(answer, correctAnswer));
  }
  finalText(result, name);
};
