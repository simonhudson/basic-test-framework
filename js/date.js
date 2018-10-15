'use strict';

const moment = require('moment');

const isValidDate = date => date instanceof Date && !isNaN(date);

const toIsoString = value => {
	if (!value || typeof value !== 'string') return null;
	const date = new Date(value);
	if (!isValidDate(date)) return null;
	return date.toISOString();
};

module.exports = {
	toIsoString,
};