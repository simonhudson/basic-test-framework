'use strict';

const { expect, test } = require('../../../expect');
const defineArticle = require('./index');

module.exports = () => {
	
	test('defineArticle() defines article (e.g "a" / "an") for a string', () => {
	
		const tests = [
			{ input: null, expected: null },
			{ input: true, expected: null },
			{ input: 10, expected: null },
			{ input: 'Hello', expected: 'a' },
			{ input: 'Goodbye', expected: 'a' },
			{ input: 'Error', expected: 'an' },
			{ input: 'apple', expected: 'an' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = defineArticle(input);
			expect(actual).toEqual(expected);
		});
	});

};