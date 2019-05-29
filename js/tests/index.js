'use strict';

const UTILITIES = ['date', 'maths', 'string'];
const TESTS = {};

UTILITIES.forEach(item => TESTS[item] = require(`../${item}/methods`));

for (const key in TESTS) {
	console.log(`\n${key}\n----------`);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log(`\n`);