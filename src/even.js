import readlineSync from 'readline-sync';

var getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

export var checkNum = () => {
    let i = 0;
    while ( i !== 3) {
        let number = getRandomIntInclusive(1, 30);
        console.log(`Question: ${number}`);
        var answer = readlineSync.question(`Your answer: `);
        var correctAnswer = ( (number % 2) == 0) ? 'yes' : 'no';
        if ( answer == correctAnswer) {
            console.log(`Correct!`);
            i += 1;
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            return false;
        }
    }
    return true;
};
