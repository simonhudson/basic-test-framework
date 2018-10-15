'use strict';

const { expect, test } = require('../../expect');
const date = require('../date');

const NOW = new Date();

// const testValue = {
// 	: NOW.getUTCFullYear() + '12-25',
// 		nowTimestamp: NOW.getTime(),
// 		futureIso8601Date: NOW.getUTCFullYear() + 1 + '-12-25',
// 		futureIso8601DateTime: NOW.getUTCFullYear() + 1 + '-12-25T00:00:00+00:00',
// 		futureTimestamp: new Date(NOW.getUTCFullYear() + 1 + '-12-25T00:00:00+00:00').getTime(),
// 		pastIso8601Date: NOW.getUTCFullYear() - 1 + '-12-25',
// 		pastIso8601DateTime: NOW.getUTCFullYear() - 1 + '-12-25T00:00:00+00:00',
// 		pastTimestamp: new Date(NOW.getUTCFullYear() - 1 + '-12-25T00:00:00+00:00').getTime(),
// 	};

module.exports = () => {

	// test('toIsoString() creates ISO string from date string', () => {
	// 
	// 	const tests = [
	// 		{ input: null, expected: null },
	// 		{ input: 1, expected: null },
	// 		{ input: [1,2,3], expected: null },
	// 		{ input: true, expected: null },
	// 		{ input: 'Hello', expected: null },
	// 		{ input: '29 April 1981', expected: '1981-04-28T23:00:00.000Z' }
	// 	];
	// 
	// 	tests.forEach(test => {
	// 		const { input, expected } = test;
	// 		const actual = date.toIsoString(input);
	// 		expect(actual).toEqual(expected);
	// 	});
	// });
	
	test('getDifferenceFromToday() gets difference from today as specified unit', () => {
		
		const tests = [
			{ input: { value: null, unit: null }, expected: null },
			{ input: { value: 1, unit: 1 }, expected: null },
			{ input: { value: [1,2,3], unit: [1,2,3] }, expected: null },
			{ input: { value: {foo: 1 }, unit: { foo: 1 } }, expected: null },
			{ input: { value: `${(NOW.getUTCFullYear() - 3)}-12-25`, unit: 'years'}, expected: '1981-04-28T23:00:00.000Z' }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = date.toIsoString(input);
			expect(actual).toEqual(expected);
		});
	});

};