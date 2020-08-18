#!/usr/bin/env node

import inputData from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = inputData('May I have your name? ');
console.log(`Hello, ${name}!`);
