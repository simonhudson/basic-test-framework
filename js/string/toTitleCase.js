'use strict';

const uppercaseFirstCharacter = require('./uppercaseFirstCharacter');

module.exports = string => {
	if (!string || typeof string !== 'string') return undefined;
	let returnValue = '';
	string.split(/\s+/g).forEach(item => returnValue += `${uppercaseFirstCharacter(item)} `);
	return returnValue.trim();
};