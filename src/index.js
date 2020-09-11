import {
  inputName,
  inputAnswer,
  checkAnswer,
  finalText,
} from './storeFunction.js';

export default (textGame, introductory) => {
  const name = inputName();
  const totalRound = 3;
  console.log(textGame);
  let result = true;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const question = introductory[i][0];
    console.log(`Question: ${question}`);
    const answer = inputAnswer();
    const correctAnswer = introductory[i][1];
    result = checkAnswer(answer, correctAnswer);
  }
  finalText(result, name);
};
