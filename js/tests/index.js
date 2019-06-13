'use strict';

const { logHeading } = require('../../expect');

const UTILITIES = [
	'array',
	'date',
	'maths',
	'object',
	'number',
	'string'
];
const TESTS = {};

UTILITIES.forEach(item => TESTS[item] = require(`../${item}/methods`));

for (const key in TESTS) {
	logHeading(key);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log(`\n`);