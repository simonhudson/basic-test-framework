'use strict';

const { expect, test } = require('../../../expect');
const getDifferenceFromNow = require('./index');

const NOW = new Date();

module.exports = () => {
	
	test('getDifferenceFromNow() gets difference from now as specified value', () => {
	
		const tests = [
			{ input: { date: null, unit: 'years' }, expected: null },
			{ input: { date: 'hello', unit: 'years' }, expected: null },
			{ input: { date: '13', unit: 'years' }, expected: null },
			{ input: { date: `29 April ${NOW.getUTCFullYear() - 1}`, unit: 'years' }, expected: 1 },
			{ input: { date: `29 April ${NOW.getUTCFullYear() - 19}`, unit: 'years' }, expected: 19 },
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = getDifferenceFromNow(input.date, input.unit);
			expect(actual).toEqual(expected);
		});
	});

};