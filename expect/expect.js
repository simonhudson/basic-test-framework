'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`\nActual (${JSON.stringify(result, null, 4)} | ${typeof result}) is not equal to expected (${JSON.stringify(expected, null, 4)} | ${typeof expected})\n`);
		},
	}

};
