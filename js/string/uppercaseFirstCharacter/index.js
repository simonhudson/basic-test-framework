'use strict';

module.exports = string => {
	if (!string || typeof string !== 'string') return undefined;
	return string.charAt(0).toUpperCase() + string.slice(1);
};