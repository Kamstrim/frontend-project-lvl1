import readlineSync from 'readline-sync';

export const inputData = (quest) => {
    return readlineSync.question(quest);
}

