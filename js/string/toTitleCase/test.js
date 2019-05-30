'use strict';

const { expect, test } = require('../../../expect');
const toTitleCase = require('./index');

module.exports = () => {

	test('toTitleCase()', 'converts string to title case', () => {

		const ORIGINAL_STRING = 'lorem Ipsum dolor foo';

		const tests = [
			{
				input: { string: 1 },
				expected: undefined
			},
			{
				input: { string: true },
				expected: undefined
			},
			{
				input: { string: [1,2,3] },
				expected: undefined
			},
			{
				input: { string: {foo: 1 } },
				expected: undefined
			},
			{
				input: { string: ORIGINAL_STRING },
				expected: 'Lorem Ipsum Dolor Foo'
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = toTitleCase(input.string);
			expect(actual).toEqual(expected);
		});

	});

};