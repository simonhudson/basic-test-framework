'use strict';

const logSymbols = require('log-symbols');
const SPACING = '  ';

module.exports = (title, description, callback) => {
	
	const logFeedback = state =>
		console.log(`${SPACING}${state === 'pass' ? `${logSymbols.success} PASS:` : `${logSymbols.error} FAIL:`} ${title} ${description}`);
	
	try {
		callback();
		logFeedback('pass');
	} catch (error) {
		logFeedback('error');
		console.error(error);
	}
};
