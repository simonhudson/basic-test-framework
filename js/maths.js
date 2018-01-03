'use strict';

const checkInput = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
}

const sum = (a, b) => {
	checkInput(a, b);
	return a + b;
};

const subtract = (a, b) => {
	checkInput(a, b);
	return a - b;
};

const multiply = (a, b) => {
	checkInput(a, b);
	return a * b;
}

module.exports = {
	sum,
	subtract,
	multiply
};
