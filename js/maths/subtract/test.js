'use strict';

const { expect, test } = require('../../../expect');
const subtract = require('./index');

module.exports = () => {

	test('subtract() subtracts numbers', () => {
		const actual = subtract(5, 3);
		const expected = 2;
		expect(actual).toEqual(expected);
	});

};