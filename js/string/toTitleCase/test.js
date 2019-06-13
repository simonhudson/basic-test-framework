'use strict';

const { expect, test } = require('../../../expect');
const toTitleCase = require('./index');

module.exports = () => {

	test('toTitleCase()', 'converts string to title case', () => {

		const ORIGINAL_STRING = 'the last of the mohicans in a cupboard under the stairs';

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
				expected: 'The Last of the Mohicans in a Cupboard Under the Stairs'
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