'use strict';

const { expect, test } = require('../../../expect');
const toTitleCase = require('./index');

module.exports = () => {

	test('toTitleCase()', 'converts string to title case', () => {

		const ORIGINAL_STRING = 'lorem Ipsum dolor foo';

		const tests = [
			{
				input: { string: 1 },
				expected: null
			},
			{
				input: { string: true },
				expected: null
			},
			{
				input: { string: [1,2,3] },
				expected: null
			},
			{
				input: { string: {foo: 1 } },
				expected: null
			},
			{
				input: { string: ORIGINAL_STRING },
				expected: 'Lorem Ipsum Dolor Foo'
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const { string } = input;
			const actual = toTitleCase(string);
			expect(actual).toEqual(expected);
		});

	});

};