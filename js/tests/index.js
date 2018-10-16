'use strict';

const uppercaseFirstCharacter = require('../string/uppercaseFirstCharacter')
const TESTS = {
	date: ['getMonthName', 'isValidDate', 'toIsoString'],
	maths: ['add', 'divide', 'getAverage', 'getPercentage', 'isEven', 'isOdd', 'multiply', 'subtract'],
	string: ['replaceWhitespaceWithDelimiter', 'toTitleCase', 'uppercaseFirstCharacter']
};

for (const key in TESTS) {
	console.log(`\n${uppercaseFirstCharacter(key)}\n----------`);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log('\n');