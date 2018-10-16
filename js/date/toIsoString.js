'use strict';

const isValidDate = require('./isValidDate');

module.exports = value => {
	if (!value || typeof value !== 'string') return null;
	const date = new Date(value);
	if (!isValidDate(date)) return null;
	return date.toISOString();
};