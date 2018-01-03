'use strict';

const sum = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
	return a + b;
};

const subtract = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
	return a - b;
};

module.exports = {
	sum,
	subtract
};
