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
  console.log('What is the result of the expression?');
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const number1 = getRandomIntInclusive(1, 30);
    const number2 = getRandomIntInclusive(1, 30);
    const logicalExp = ['-', '+', '*'];
    const randExp = getRandomIntInclusive(0, 2);
    console.log(`Question: ${number1} ${logicalExp[randExp]} ${number2}`);
    const answer = inputAnswer();
    let correctAnswer = 0;
    switch (randExp) {
      case 0:
        correctAnswer = number1 - number2;
        break;
      case 1:
        correctAnswer = number1 + number2;
        break;
      default:
        correctAnswer = number1 * number2;
        break;
    }
    result = (checkAnswer(Number(answer), correctAnswer));
  }
  finalText(result, name);
};
