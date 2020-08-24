#!/usr/bin/env node

import check from '../src/games/calc.js';
import { inputName, finalText } from '../src/index.js';

const name = inputName();
console.log('What is the result of the expression?');
const result = check();
finalText(result, name);
