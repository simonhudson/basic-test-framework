'use strict';

const log = require('./log');
const maths = require('./js/maths');

const tests = [
	{
		method: 'sum',
		input: { a: 4, b: 3 },
		expected: 7
	},
	{
		method: 'subtract',
		input: { a: 4, b: 3 },
		expected: 1
	},
	{
		method: 'multiply',
		input: { a: 4, b: 3 },
		expected: 12
	}
];

tests.forEach(test => {
	const { method, expected } = test;
	const { a, b } = test.input;
	const actual = maths[method](a, b);
	if (actual !== expected) log.fail(actual, expected);
	else log.pass(actual, expected);
});
