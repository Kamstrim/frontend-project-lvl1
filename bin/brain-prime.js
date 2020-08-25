#!/usr/bin/env node

import check from '../src/games/prime.js';
import { inputName, finalText } from '../src/index.js';

const name = inputName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const result = check();
finalText(result, name);
