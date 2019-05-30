'use strict';

const { expect, test } = require('../../../expect');
const orderObject = require('./index');

module.exports = () => {
	
	test('orderObject()', 'order object based on key name', function() {

	const tests = [
			{ input: 'string', expected: null },
			{ input: [], expected: null },
			{ input: true, expected: null },
			{
				input: {
					b: 'value b',
					d: 'value d',
					a: 'value a',
					c: 'value c'
				},
				expected: {
					a: 'value a',
					b: 'value b',
					c: 'value c',
					d: 'value d'
				}
			}
		];

		tests.forEach(test => {
			const { input, expected } = test;
			const actual = orderObject(input);
			expect(actual).toDeepEqual(expected);
		});
		
	});

};