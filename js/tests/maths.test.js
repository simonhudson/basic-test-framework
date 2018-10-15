'use strict';

const { expect, test } = require('../../expect');
const maths = require('../maths');

module.exports = () => {
	
	test('add() adds numbers', () => {
		const actual = maths.add(5, 3);
		const expected = 8;
		expect(actual).toEqual(expected);
	});

	test('subtract() subtracts numbers', () => {
		const actual = maths.subtract(5, 3);
		const expected = 2;
		expect(actual).toEqual(expected);
	});

	test('multiply() multiplies numbers', () => {
		const actual = maths.multiply(5, 3);
		const expected = 15;
		expect(actual).toEqual(expected);
	});

	test('divide() divides numbers', () => {
		const actual = maths.divide(12, 3);
		const expected = 4;
		expect(actual).toEqual(expected);
	});

	test('isEven() checks if number is even', () => {

		const tests = [
			{ input: 25, expected: false },
			{ input: 26, expected: true }
		];

		tests.forEach(test => {
			const actual = maths.isEven(test.input);
			const expected = test.expected;
			expect(actual).toEqual(expected);
		});

	});

	test('isOdd() checks if number is odd', () => {

		const tests = [
			{ input: 25, expected: true },
			{ input: 26, expected: false }
		];

		tests.forEach(test => {
			const actual = maths.isOdd(test.input);
			const expected = test.expected;
			expect(actual).toEqual(expected);
		});

	});

	test('getPercentage() calculates x as a percentage of y', () => {

		const tests = [
			{
				input: { x: null, y: null },
				expected: null
			},
			{
				input: { x: 'string', y: 'string' },
				expected: null
			},
			{
				input: { x: [1, 2, 3], y: [4, 5, 6] },
				expected: null
			},
			{
				input: { x: {}, y: {} },
				expected: null
			},
			{
				input: { x: 20, y: 100 },
				expected: 20
			},
			{
				input: { x: 5, y: 50 },
				expected: 10
			},
			{
				input: { x: 75, y: 150 },
				expected: 50
			},
			{
				input: { x: 471, y: 1884 },
				expected: 25
			},
			{
				input: { x: 13, y: 130 },
				expected: 10
			},
			{
				input: { x: 12500, y: 10000 },
				expected: 125
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = maths.getPercentage(input.x, input.y);
			expect(actual).toEqual(expected);
		});

	});

	test('getAverage() calculates average value from array of values', () => {
		const tests = [
			{
				input: null,
				expected: null
			},
			{
				input: 1,
				expected: null
			},
			{
				input: 'string',
				expected: null
			},
			{
				input: [],
				expected: null
			},
			{
				input: ['string', 'string1', 'string2', 'string3'],
				expected: null
			},
			{
				input: {},
				expected: null
			},
			{
				input: [1, 2, 3, 4, 5],
				expected: 3
			},
			{
				input: [17, 52, 300, 4, -1],
				expected: 74
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = maths.getAverage(input);
			expect(actual).toEqual(expected);
		});
		
	});

};