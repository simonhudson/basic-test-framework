'use strict';

module.exports = (title, callback) => {
	try {
		callback();
		console.log(`  PASS: ${title}`);
	} catch (error) {
		console.error(`  FAIL: ${title}`);
		console.error(error);
	}
};
