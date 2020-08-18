#!/usr/bin/env node

import inputData from '../src/cli.js';
import {checkNum} from '../src/even.js';

console.log('Welcome to the Brain Games!');
const name = inputData('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer %c"yes" %cif the number is even, otherwise answer %c"no".', 'color: red;', 'font-weight:bold', 'color: red');
var result = checkNum();
if (result) {
    console.log(`Congratulations, ${name}!`);
} else {
    console.log(`Let's try again, ${name}!`);
};