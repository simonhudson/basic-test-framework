'use strict';

module.exports = str => {
	if (!str || typeof str !== 'string' || str.length < 1) return null;
	return ['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0).toLowerCase()) ? 'an' : 'a';
};
