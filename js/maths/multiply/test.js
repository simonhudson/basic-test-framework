'use strict';

const { expect, test } = require('../../../expect');
const multiply = require('./index');

module.exports = () => {

	test('multiply()', 'multiplies numbers', () => {
		const actual = multiply(5, 3);
		const expected = 15;
		expect(actual).toEqual(expected);
	});

};