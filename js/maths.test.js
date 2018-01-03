'use strict';

const { expect, test } = require('../framework');
const maths = require('./maths');

test('sum() adds numbers', () => {
	const result = maths.sum(5, 3);
	const expected = 8;
	expect(result).toEqual(expected);
});

test('subtract() subtracts numbers', () => {
	const result = maths.subtract(5, 3);
	const expected = 2;
	expect(result).toEqual(expected);
});

test('multiply() multiplies numbers', () => {
	const result = maths.multiply(5, 3);
	const expected = 15;
	expect(result).toEqual(expected);
});
