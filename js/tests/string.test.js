const { expect, test } = require('../../expect');
const string = require('../string');

test('uppercaseFirstChar() converts first character of string to uppercase', () => {

	const tests = [
		{ input: 'lorem Ipsum', expected: 'Lorem Ipsum' }
	];

	tests.forEach(test => {
		const { input, expected } = test;
		const result = string.uppercaseFirstChar(input);
		expect(result).toEqual(expected);
	});

});

test('replaceWhitespaceWithDelimiter() replaces spaces in string with specified delimiter', () => {

	const originalString = 'lorem Ipsum  dolor   foo';

	const tests = [
		{
			input: {
				string: originalString,
			},
			expected: 'lorem-Ipsum-dolor-foo'
		},
		{
			input: {
				string: originalString,
				delimiter: '+'
			},
			expected: 'lorem+Ipsum+dolor+foo'
		}
	];

	tests.forEach(test => {
		const { input, expected } = test;
		const result = string.replaceWhitespaceWithDelimiter(input.string, input.delimiter);
		expect(result).toEqual(expected);
	});

});

test('toTitleCase() converts string to title case', () => {

	const originalString = 'lorem Ipsum  dolor   foo';

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
			input: { string: originalString },
			expected: 'Lorem Ipsum Dolor Foo'
		}
	];

	tests.forEach(test => {
		const { input, expected } = test;
		const result = string.toTitleCase(input.string);
		expect(result).toEqual(expected);
	});

});
