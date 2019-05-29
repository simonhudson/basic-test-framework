'use strict';

const exportObj = {};

require('./methods').forEach(method => exportObj[method] = require(`./${method}`));

module.exports = exportObj;