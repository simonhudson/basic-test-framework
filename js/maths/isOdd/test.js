'use strict';

const { expect, test } = require('../../../expect');
const isOdd = require('./index');

module.exports = () => {

	test('isOdd()', 'checks if number is odd', () => {

		const tests = [
			{ input: 25, expected: true },
			{ input: 26, expected: false }
		];

		tests.forEach(test => {
			const actual = isOdd(test.input);
			const expected = test.expected;
			expect(actual).toEqual(expected);
		});

	});

};