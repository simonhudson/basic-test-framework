'use strict';

module.exports = utility => {
	const exportObj = {};
	require(`./${utility}/methods`).forEach(method => exportObj[method] = require(`./${utility}/${method}`));
	return exportObj;
};