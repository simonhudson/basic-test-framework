'use strict';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

module.exports = str => {
	if (!str || typeof str !== 'string') return null;
	return VOWELS.includes(str.charAt(0).toLowerCase());
};
