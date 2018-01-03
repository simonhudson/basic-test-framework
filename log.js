'use strict';

module.exports = {
	fail(actual, expected) { throw new Error(`${actual} is not equal to ${expected}`); },
	pass(actual, expected) { console.log(`PASS: ${actual} equal to ${expected}`); }
};
