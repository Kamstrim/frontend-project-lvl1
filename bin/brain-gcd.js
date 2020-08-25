#!/usr/bin/env node

import check from '../src/games/nod.js';
import { inputName, finalText } from '../src/index.js';

const name = inputName();
console.log('Find the greatest common divisor of given numbers.');
const result = check();
finalText(result, name);
