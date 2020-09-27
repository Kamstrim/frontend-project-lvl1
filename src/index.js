import inputData from './cli.js';

export const roundsCount = 3;

export const playGame = (gameDescription, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = inputData('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = dataGame[i];
    console.log(`Question: ${question}`);
    const answer = inputData('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
