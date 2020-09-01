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
  console.log('What number is missing in the progression?');
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const delIndex = getRandomIntInclusive(0, 9);
    const arr = [];
    arr[0] = number1;
    for (let n = 1; n < 10; n += 1) {
      arr[n] = arr[n - 1] + number2;
    }
    const correctAnswer = arr[delIndex];
    arr[delIndex] = '..';
    console.log(`Question: ${arr}`);
    const answer = inputAnswer();
    result = (checkAnswer(Number(answer), correctAnswer));
  }
  finalText(result, name);
};
