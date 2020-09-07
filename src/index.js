import inputData from './cli.js';

export const inputName = (text) => {
  console.log('Welcome to the Brain Games!');
  const name = inputData('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const inputAnswer = () => {
  const answer = inputData('Your answer: ');
  return answer;
};

export const getRandomIntInclusive = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
};

export const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export const finalText = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const even = () => {
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
  return finalText(result, name);
};
