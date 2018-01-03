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

test('isEvenNumber() checks if number is even', () => {
	const result = maths.isEvenNumber(26);
	const expected = true;
	expect(result).toEqual(expected);
});

test('isEvenNumber() checks if number is even', () => {
	const result = maths.isEvenNumber(25);
	const expected = false;
	expect(result).toEqual(expected);
});

test('isOddNumber() checks if number is odd', () => {
	const result = maths.isOddNumber(25);
	const expected = true;
	expect(result).toEqual(expected);
});

test('isOddNumber() checks if number is odd', () => {
	const result = maths.isOddNumber(26);
	const expected = false;
	expect(result).toEqual(expected);
});
