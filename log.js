'use strict';

const fail = (actual, expected) => console.log(`FAIL: ${actual} is not equal to ${expected}`);
const pass = (actual, expected) => console.log(`PASS: ${actual} equal to ${expected}`);

module.exports = {
	fail,
	pass
};
