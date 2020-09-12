import inputData from './cli.js';

export default (textGame, introductory) => {
  console.log('Welcome to the Brain Games!');
  const name = inputData('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(textGame);
  let result = true;
  const totalRound = 3;
  for (let i = 0; (i < totalRound) && (result); i += 1) {
    const question = introductory[i][0];
    console.log(`Question: ${question}`);
    const answer = inputData('Your answer: ');
    const correctAnswer = introductory[i][1];
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      result = false;
    }
  }
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
