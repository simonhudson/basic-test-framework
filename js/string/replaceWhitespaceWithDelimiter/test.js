'use strict';

const { expect, test } = require('../../../expect');
const replaceWhitespaceWithDelimiter = require('./index');

module.exports = () => {

	test('replaceWhitespaceWithDelimiter() replaces spaces in string with specified delimiter', () => {
		
		const ORIGINAL_STRING = 'lorem Ipsum  dolor   foo';

		const tests = [
			{
				input: {
					string: ORIGINAL_STRING,
				},
				expected: 'lorem-Ipsum-dolor-foo'
			},
			{
				input: {
					string: ORIGINAL_STRING,
					delimiter: '+'
				},
				expected: 'lorem+Ipsum+dolor+foo'
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = replaceWhitespaceWithDelimiter(input.string, input.delimiter);
			expect(actual).toEqual(expected);
		});

	});

};