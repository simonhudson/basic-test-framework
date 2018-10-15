'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`\nActual (${result} | ${typeof result}) is not equal to expected (${expected} | ${typeof expected})\n`);
		},
	}

};
