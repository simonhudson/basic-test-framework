'use strict';

const sum = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
	return a + b;
};

const subtract = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
	return a - b;
};

const multiply = (a, b) => {
	if (!a || !b || isNaN(a) || isNaN(b)) return undefined;
	return a * b;
};

const isEvenNumber = (a) => {
	if (!a || isNaN(a)) return undefined;
	return (a % 2 === 0);
};

const isOddNumber = (a) => {
	if (!a || isNaN(a)) return undefined;
	return (a % 2 !== 0);
};

module.exports = {
	isEvenNumber,
	isOddNumber,
	multiply,
	subtract,
	sum,
};
