'use strict';

module.exports = (valueA, valueB) => {
	if (!valueA || (valueA && isNaN(valueA)) || (valueB && isNaN(valueB))) return undefined;
}