'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`${result} is not equal to ${expected}`);
		},
		toBeType(expectedType) {
			let isType = typeof result === expectedType;
			if (expectedType === 'boolean') isType = (result === true || result === false);
			if (!isType) throw new Error(`${result} is not ${expectedType}`);
		}
	}

};
