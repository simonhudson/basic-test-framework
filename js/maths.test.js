'use strict';

const { expect, test } = require('../framework');
const maths = require('./maths');

test('sum() adds numbers', () => {
	const result = maths.sum(5, 3);
	const expected = 8;
	expect(result).toBeType('number');
	expect(result).toEqual(expected);
});

test('subtract() subtracts numbers', () => {
	const result = maths.subtract(5, 3);
	const expected = 2;
	expect(result).toBeType('number');
	expect(result).toEqual(expected);
});

test('multiply() multiplies numbers', () => {
	const result = maths.multiply(5, 3);
	const expected = 15;
	expect(result).toBeType('number');
	expect(result).toEqual(expected);
});

test('divide() divides numbers', () => {
	const result = maths.divide(12, 3);
	const expected = 4;
	expect(result).toBeType('number');
	expect(result).toEqual(expected);
});

test('isEven checks if number is even', () => {
	const result = maths.isEven(26);
	const expected = true;
	expect(result).toBeType('boolean');
	expect(result).toEqual(expected);
});

test('isEven checks if number is even', () => {
	const result = maths.isEven(25);
	const expected = false;
	expect(result).toBeType('boolean');
	expect(result).toEqual(expected);
});

test('isOdd checks if number is odd', () => {
	const result = maths.isOdd(25);
	const expected = true;
	expect(result).toBeType('boolean');
	expect(result).toEqual(expected);
});

test('isOdd checks if number is odd', () => {
	const result = maths.isOdd(26);
	const expected = false;
	expect(result).toBeType('boolean');
	expect(result).toEqual(expected);
});
