'use strict';

const { expect, test } = require('../../../expect');
const add = require('./index');

module.exports = () => {
	
	test('add()', 'adds numbers', () => {
		const actual = add(5, 3);
		const expected = 8;
		expect(actual).toEqual(expected);
	});

};