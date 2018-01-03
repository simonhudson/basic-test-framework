'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`Actual (${result} | ${typeof result}) is not equal to expected (${expected} | ${typeof expected})`);
		},
	}

};
