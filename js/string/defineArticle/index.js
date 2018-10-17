'use strict';

const beginsWithVowel = require('../beginsWithVowel');

module.exports = str => {
	if (!str || typeof str !== 'string') return null;
	return beginsWithVowel(str) ? 'an' : 'a';
};
