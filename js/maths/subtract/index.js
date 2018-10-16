'use strict';

const checkInput = require('../checkInput');

module.exports = (valueA, valueB) => {
	checkInput(valueA, valueB);
	return valueA - valueB;
};