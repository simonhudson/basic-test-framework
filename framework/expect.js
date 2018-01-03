'use strict';

module.exports = (result) => {

	const checkIsBoolean = () => result === true || result === false;

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`${result} is not equal to ${expected}`);
		},
		toBeType(expectedType) {
			let isType = typeof result === expectedType;
			if (expectedType === 'boolean') isType = checkIsBoolean();
			if (!isType) throw new Error(`${result} is not ${expectedType}`);
		}
	}

};
