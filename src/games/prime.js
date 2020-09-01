import {
  getRandomIntInclusive,
  inputName,
  inputAnswer,
  checkAnswer,
  finalText,
}
  from '../index.js';

export default () => {
  const name = inputName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const number = getRandomIntInclusive(1, 100);
    console.log(`Question: ${number}`);
    const answer = inputAnswer();
    let n = 2;
    while (number % n !== 0) {
      n += 1;
    }
    const correctAnswer = (n === number) ? 'yes' : 'no';
    result = (checkAnswer(answer, correctAnswer));
  }
  finalText(result, name);
};
