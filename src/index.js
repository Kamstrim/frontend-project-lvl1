import inputData from './cli.js';

export const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const name = inputData('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const inputAnswer = () => {
  const answer = inputData('Your answer: ');
  return answer;
}

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  }
}

export const finalText = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
