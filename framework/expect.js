'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`${result} is not equal to ${expected}`);
		},
		toBeType(expectedType) {

			const checkIsBoolean = () => result === true || result === false;

			let isType = typeof result === expectedType;
			if (expectedType === 'boolean') isType = checkIsBoolean();
			if (!isType) throw new Error(`${result} is not ${expectedType}`);
		}
	}

};
