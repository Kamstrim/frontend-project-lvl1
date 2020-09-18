import inputData from './cli.js';

export const getRound = () => 3;

export const playGame = (questionGame, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = inputData('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(questionGame);
  let result = true;
  const roundCount = getRound();
  for (let i = 0; (i < roundCount) && (result); i += 1) {
    const question = dataGame[i][0];
    console.log(`Question: ${question}`);
    const answer = inputData('Your answer: ');
    const correctAnswer = dataGame[i][1];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      result = false;
    }
  }
  if (result) {
    console.log(`Congratulations, ${namePlayer}!`);
  } else {
    console.log(`Let's try again, ${namePlayer}!`);
  }
};
