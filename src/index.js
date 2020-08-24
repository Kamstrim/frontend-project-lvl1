import inputData from './cli.js';

export const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const name = inputData('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomIntInclusive = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
};

export const finalText = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
