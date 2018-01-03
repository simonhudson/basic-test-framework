'use strict';

module.exports = (result) => {

	return {
		toEqual(expected) {
			if (result !== expected) throw new Error(`${result} is not equal to ${expected}`);
		}
	}

};
