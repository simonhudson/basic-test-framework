const { expect, test } = require('../framework');
const string = require('./string');

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

test('replaceSpaceWithDelimiter() replaces spaces in string with specified delimiter', () => {

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
		const result = string.replaceSpaceWithDelimiter(input.string, input.delimiter);
		expect(result).toEqual(expected);
	});

});
