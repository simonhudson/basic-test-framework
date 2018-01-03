'use strict';

const maths = require('./js/maths');
let actual, expected;

actual = maths.sum(5, 2);
expected = 7;
if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
else console.log(`PASS: ${actual} equal to ${expected}`);

actual = maths.subtract(10, 2);
expected = 8;
if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
else console.log(`PASS: ${actual} equal to ${expected}`);
