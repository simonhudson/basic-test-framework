'use strict';

const checkInput = (a, b) => {
	if (!a || (a && isNaN(a)) || (b && isNaN(b))) return undefined;
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
};

const divide = (a, b) => {
	checkInput(a, b);
	return a / b;
};

const isEven = (a) => {
	checkInput(a);
	return (a % 2 === 0);
};

const isOdd = (a) => {
	checkInput(a);
	return (a % 2 !== 0);
};

module.exports = {
	divide,
	isEven,
	isOdd,
	multiply,
	subtract,
	sum,
};
