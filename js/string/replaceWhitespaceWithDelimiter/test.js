'use strict';

const { expect, test } = require('../../../expect');
const replaceWhiteSpaceWithDelimiter = require('./index');

module.exports = () => {

	test('replaceWhiteSpaceWithDelimiter() replaces spaces in string with specified delimiter', () => {
		
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
			const actual = replaceWhiteSpaceWithDelimiter(input.string, input.delimiter);
			expect(actual).toEqual(expected);
		});

	});

};