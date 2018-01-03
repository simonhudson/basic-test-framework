'use strict';

const uppercaseFirstChar = (string) => {
	if (!string || typeof string !== 'string') return undefined;
	return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = {
	uppercaseFirstChar
};
