'use strict';

const { expect, test } = require('../../../expect');
const getDifferenceFromNow = require('./index');

const NOW = new Date();
const now = {
	day: NOW.getDay(),
	month: NOW.getMonth(),
	year: NOW.getFullYear()
};

module.exports = () => {
	
	test('getDifferenceFromNow() gets difference from now as specified value', () => {
	
		const tests = [
			{ input: { date: null, unit: 'years' }, expected: null },
			{ input: { date: 'hello', unit: 'years' }, expected: null },
			{ input: { date: '13', unit: 'years' }, expected: null },
			{ input: { date: `${now.day} ${now.month} ${now.year - 1}`, unit: 'years' }, expected: 1 },
			{ input: { date: `${now.day} ${now.month} ${now.year - 19}`, unit: 'years' }, expected: 19 },
			{ input: { date: `${now.day} ${now.month - 3} ${now.year}`, unit: 'months' }, expected: 3 },
			{ input: { date: `${now.day + 10} ${now.month} ${now.year}`, unit: 'days' }, expected: 10 }
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			const actual = getDifferenceFromNow(input.date, input.unit);
			expect(actual).toEqual(expected);
		});
	});

};