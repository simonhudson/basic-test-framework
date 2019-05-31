'use strict';

const errorMessage = (expected, result) => `\nActual (${JSON.stringify(result, null, 4)} | ${typeof result}) is not equal to expected (${JSON.stringify(expected, null, 4)} | ${typeof expected})\n`;

const performCheck = (expected, result) => {
	if (result !== expected) throw new Error(errorMessage(expected, result));
};

module.exports = (result) => {

	return {
		toEqual(expected) {
			performCheck(expected, result);
		},
		toDeepEqual(expected) {
			const expectedAsString = JSON.stringify(expected);
			const resultAsString = JSON.stringify(result);
			performCheck(expectedAsString, resultAsString);	
		}
	}

};
