'use strict';

const { expect, logHeading, test } = require('../../expect');
const date = require('../date');

module.exports = () => {
	
	logHeading(__filename);
	
	test('toIsoString() creates ISO string from date string', () => {
	
		const tests = [
			{ input: null, expected: null },
			{ input: 1, expected: null },
			{ input: [1,2,3], expected: null },
			{ input: true, expected: null },
			{ input: 'Hello', expected: null },
			{ input: '29 April 1981', expected: '1981-04-28T23:00:00.000Z' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = date.toIsoString(input);
			expect(actual).toEqual(expected);
		});
	});
	
	test('getMonthName() returns month name from numeric value', () => {
	
		const tests = [
			{ input: { value: null, truncate: null }, expected: null },
			{ input: { value: 'hello', truncate: null }, expected: null },
			{ input: { value: '13', truncate: null }, expected: null },
			{ input: { value: '10', truncate: null }, expected: 'October' },
			{ input: { value: 9, truncate: null }, expected: 'September' },
			{ input: { value: '8', truncate: true }, expected: 'Aug' },
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = date.getMonthName(input.value, input.truncate);
			expect(actual).toEqual(expected);
		});
	});

};