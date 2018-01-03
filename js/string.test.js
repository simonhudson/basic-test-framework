const { expect, test } = require('../framework');
const string = require('./string');

test('uppercaseFirstChar() converts first character of string to uppercase', () => {

	const tests = [
		{ input: 1, expected: undefined },
		{ input: [1,2,3], expected: undefined },
		{ input: true, expected: undefined },
		{ input: {}, expected: undefined },
		{ input: 'lorem Ipsum', expected: 'Lorem Ipsum' }
	];

	tests.forEach(test => {
		const { input, expected } = test;
		const result = string.uppercaseFirstChar(input);
		expect(result).toEqual(expected);
	});

});
