'use strict';

const uppercaseFirstChar = string => {
	if (!string || typeof string !== 'string') return undefined;
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const replaceWhitespaceWithDelimiter = (string, delimiter = '-') => {
	if (!string || typeof string !== 'string') return string;
	return string.replace(/\s+/g, delimiter);
};

const toTitleCase = string => {
	if (!string || typeof string !== 'string') return undefined;
	let returnValue = '';
	string.split(/\s+/g).forEach(item => returnValue += `${uppercaseFirstChar(item)} `);
	return returnValue.trim();
};

module.exports = {
	replaceWhitespaceWithDelimiter,
	uppercaseFirstChar,
	toTitleCase
};
