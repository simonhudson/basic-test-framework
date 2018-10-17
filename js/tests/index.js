'use strict';

const TESTS = {
	date: [
		'getDayName',
		'getDifferenceBetweenDates',
		'getMonthName',
		'isOver18Years',
		'isValidDate',
		'toIsoString'
	],
	maths: [
		'add',
		'divide',
		'getAverage',
		'getPercentage',
		'isEven',
		'isOdd',
		'multiply',
		'subtract'
	],
	string: [
		'beginsWithVowel',
		'defineArticle',
		'replaceWhiteSpaceWithDelimiter',
		'stripWhiteSpace',
		'toTitleCase',
		'uppercaseFirstCharacter'
	]
};

for (const key in TESTS) {
	console.log(`\n${key}\n----------`);
	TESTS[key].forEach(test => require(`../${key}/${test}/test`)());
};
console.log('\n');