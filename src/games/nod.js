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
  console.log('Find the greatest common divisor of given numbers.');
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    console.log(`Question: ${number1} ${number2}`);
    const answer = inputAnswer();
    let nod = (number1 <= number2) ? number1 : number2;
    while ((number1 % nod) || (number2 % nod) !== 0) {
      nod -= 1;
    }
    const correctAnswer = nod;
    result = (checkAnswer(Number(answer), correctAnswer));
  }
  finalText(result, name);
};
