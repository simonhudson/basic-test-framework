'use strict';

const { expect, test } = require('../../../expect');
const beginsWithVowel = require('./index');

module.exports = () => {
	
	test('beginsWithVowel() checks if string begins with a vowel', () => {
	
		const tests = [
			{ input: null, expected: null },
			{ input: true, expected: null },
			{ input: 10, expected: null },
			{ input: 'Hello', expected: false },
			{ input: 'Goodbye', expected: false },
			{ input: 'Error', expected: true },
			{ input: 'apple', expected: true }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = beginsWithVowel(input);
			expect(actual).toEqual(expected);
		});
	});

};