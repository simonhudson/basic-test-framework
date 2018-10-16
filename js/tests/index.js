'use strict';

const uppercaseFirstCharacter = require('../string/uppercaseFirstCharacter')
const TESTS = {
	date: ['getDayName', 'getDifferenceFromNow', 'getMonthName', 'isOver18Years', 'isValidDate', 'toIsoString'],
	maths: ['add', 'divide', 'getAverage', 'getPercentage', 'isEven', 'isOdd', 'multiply', 'subtract'],
	string: ['replaceWhiteSpaceWithDelimiter', 'stripWhiteSpace', 'toTitleCase', 'uppercaseFirstCharacter']
};

for (const key in TESTS) {
	console.log(`\n${uppercaseFirstCharacter(key)}\n----------`);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log('\n');