'use strict';

const checkInput = (a, b) => {
	if (!a || (a && isNaN(a)) || (b && isNaN(b))) return undefined;
}

const add = (a, b) => {
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

const getPercentage = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') return null;
	const value = x / y * 100;
	return parseInt(value.toFixed());
}

module.exports = {
	add,
	divide,
	getPercentage,
	isEven,
	isOdd,
	multiply,
	subtract,
};
