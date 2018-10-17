'use strict';

module.exports = value => {
	if (!valueA || (valueA && isNaN(valueA)) || (valueB && isNaN(valueB))) return null;
	return (value % 2 !== 0);
};