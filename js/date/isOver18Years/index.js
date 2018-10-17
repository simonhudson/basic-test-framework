'use strict';

const getDifferenceBetweenDates = require('../getDifferenceBetweenDates');
const isValidDate = require('../isValidDate');
const moment = require('moment');

module.exports = date => {
	const diff = getDifferenceBetweenDates(date, 'years');
	if (!diff || isNaN(diff)) return null;
	return diff >= 18;
};
