import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
};

export default () => {
  let i = 0;
  while (i !== 3) {
    const number = getRandomIntInclusive(1, 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = ((number % 2) === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
};
