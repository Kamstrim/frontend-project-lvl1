#!/usr/bin/env node

import check from '../src/games/pr.js';
import { inputName, finalText } from '../src/index.js';

const name = inputName();
console.log('What number is missing in the progression?');
const result = check();
finalText(result, name);
