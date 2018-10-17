'use strict';

module.exports = string => {
	if (!string || typeof string !== 'string') return undefined;
	let returnValue = '';
	string.split(/\s+/g).forEach(item => returnValue += `${item.charAt(0).toUpperCase() + item.slice(1)} `);
	return returnValue.trim();
};