'use strict';

const { expect, test } = require('../../../expect');
const getDifferenceFromNow = require('./index');
const getMonthName = require('../getMonthName');


module.exports = () => {

	const NOW = new Date();
	const nowDate = {
		day: NOW.getUTCDate(),
		month: NOW.getUTCMonth() + 1,
		year: NOW.getUTCFullYear()
	};
	const FUTURE_ONE_YEAR = `${nowDate.month} ${nowDate.day} ${nowDate.year + 1}`;
	const FUTURE_TEN_YEARS = `${nowDate.month} ${nowDate.day} ${nowDate.year + 10}`;
	const FUTURE_FOUR_MONTHS = `${nowDate.month + 4} ${nowDate.day} ${nowDate.year}`;
	const PAST_ONE_YEAR = `${nowDate.month} ${nowDate.day} ${nowDate.year - 1}`;
	const PAST_TEN_YEARS = `${nowDate.month} ${nowDate.day} ${nowDate.year - 10}`;
	const PAST_FOUR_MONTHS = `${nowDate.month - 4} ${nowDate.day} ${nowDate.year}`;
	
	test('getDifferenceFromNow() gets difference from now as specified value', () => {
	
		const tests = [
			{ input: { date: null, unit: 'years' }, expected: null },
			{ input: { date: 'hello', unit: 'years' }, expected: null },
			{ input: { date: '13', unit: 'years' }, expected: null },
			{ input: { date: FUTURE_ONE_YEAR, unit: 'years' }, expected: -1 },
			{ input: { date: FUTURE_TEN_YEARS, unit: 'years' }, expected: -10 },
			{ input: { date: FUTURE_FOUR_MONTHS, unit: 'months' }, expected: -4 },
			{ input: { date: PAST_ONE_YEAR, unit: 'years' }, expected: 1 },
			{ input: { date: PAST_TEN_YEARS, unit: 'years' }, expected: 10 },
			{ input: { date: PAST_FOUR_MONTHS, unit: 'months' }, expected: 4 },
		];
	
		tests.forEach(test => {
			const { input, expected } = test;
			console.log(`>>> ${input.date} / ${input.unit}`);
			console.log();
			const actual = getDifferenceFromNow(input.date, input.unit);
			expect(actual).toEqual(expected);
		});
	});

};