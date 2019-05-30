'use strict';

const { expect, test } = require('../../../expect');
const isEven = require('./index');

module.exports = () => {
	
	test('isEven()', 'checks if number is even', () => {

		const tests = [
			{ input: 25, expected: false },
			{ input: 26, expected: true }
		];

		tests.forEach(test => {
			const actual = isEven(test.input);
			const expected = test.expected;
			expect(actual).toEqual(expected);
		});

	});

};