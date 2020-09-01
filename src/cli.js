import readlineSync from 'readline-sync';

export default (quest) => readlineSync.question(quest);

export const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
