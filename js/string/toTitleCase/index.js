'use strict';

const EXCLUSIONS = [
	'a',
	'an',
	'in',
	'of',
	'the'
];

const convertString = str => `${str.charAt(0).toUpperCase() + str.slice(1)} `;

module.exports = string => {
	if (!string || typeof string !== 'string') return null;
	let returnValue = '';
	string.split(/\s+/g).forEach((item, index) => {
		if (index === 0 || !EXCLUSIONS.includes(item.toLowerCase())) returnValue += convertString(item);
		else returnValue += `${item} `;
	});
	return returnValue.trim();
};