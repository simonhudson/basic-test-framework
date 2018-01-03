'use strict';

const log = require('./log');
const maths = require('./js/maths');
let actual, expected;

actual = maths.sum(5, 2);
expected = 7;
if (actual !== expected) log.fail(actual, expected);
else log.pass(actual, expected);

actual = maths.subtract(10, 2);
expected = 8;
if (actual !== expected) log.fail(actual, expected);
else log.pass(actual, expected);
