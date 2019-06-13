'use strict';

module.exports = className => {
	const exportObj = {};
	require(`./${className}/methods`).forEach(method => exportObj[method] = require(`./${className}/${method}`));
	return exportObj;
};