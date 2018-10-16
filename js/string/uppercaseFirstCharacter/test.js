'use strict';

const { expect, test } = require('../../../expect');
const uppercaseFirstCharacter = require('./index');

module.exports = () => {
	
	test('uppercaseFirstCharacter() converts first character of string to uppercase', () => {

		const tests = [
			{ input: 'lorem Ipsum', expected: 'Lorem Ipsum' }
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = uppercaseFirstCharacter(input);
			expect(actual).toEqual(expected);
		});

	});

};