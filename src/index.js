import inputData from './cli.js';

export const getRound = 3;

export const playGame = (questionGame, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = inputData('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(questionGame);
  const roundsCount = getRound;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = dataGame[i];
    console.log(`Question: ${question}`);
    const answer = inputData('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${namePlayer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
};
