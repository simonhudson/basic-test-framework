'use strict';

const SPACING = '  ';

module.exports = (title, callback) => {
	try {
		callback();
		console.log(`${SPACING}PASS: ${title}`);
	} catch (error) {
		console.error(`${SPACING}FAIL: ${title}`);
		console.error(error);
	}
};
