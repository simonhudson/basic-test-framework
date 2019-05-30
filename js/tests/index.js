'use strict';

const UTILITIES = [
	'array',
	'date',
	'maths',
	'object',
	'string'
];
const TESTS = {};

UTILITIES.forEach(item => TESTS[item] = require(`../${item}/methods`));

for (const key in TESTS) {
	console.log(`\n${key}\n----------`);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log(`\n`);