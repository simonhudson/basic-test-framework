'use strict';

const { expect, test } = require('../../../expect');
const divide = require('./index');

module.exports = () => {
	
	test('divide()', 'divides numbers', () => {
		const actual = divide(12, 3);
		const expected = 4;
		expect(actual).toEqual(expected);
	});

};