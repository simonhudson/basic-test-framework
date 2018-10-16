'use strict';

const checkInput = require('../checkInput');

module.exports = value => {
	checkInput(value);
	return (value % 2 !== 0);
};