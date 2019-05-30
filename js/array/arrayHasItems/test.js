'use strict';

const { expect, test } = require('../../../expect');
const arrayHasItems = require('./index');

module.exports = () => {
	
	test('arrayHasItems()', 'checks if array has items', function() {

		const tests = [
			{ input: null, expected: false },
			{ input: 1, expected: false },
			{ input: 'string', expected: false },
			{ input: [], expected: false },
			{ input: {}, expected: false },
			{ input: [1], expected: true },
			{ input: ['1', '2', 'lorem', true], expected: true }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = arrayHasItems(input);
			expect(actual).toEqual(expected);
		});
		
	});

};