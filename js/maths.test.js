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

test('divide() divides numbers', () => {
	const result = maths.divide(12, 3);
	const expected = 4;
	expect(result).toEqual(expected);
});

test('isEven checks if number is even', () => {

	const tests = [
		{ input: 25, expected: false },
		{ input: 26, expected: true }
	];

	tests.forEach(test => {
		const result = maths.isEven(test.input);
		const expected = test.expected;
		expect(result).toEqual(expected);
	});

});

test('isOdd checks if number is odd', () => {

	const tests = [
		{ input: 25, expected: true },
		{ input: 26, expected: false }
	];

	tests.forEach(test => {
		const result = maths.isOdd(test.input);
		const expected = test.expected;
		expect(result).toEqual(expected);
	});

});
