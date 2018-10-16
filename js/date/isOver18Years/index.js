'use strict';

const getDifferenceFromNow = require('../getDifferenceFromNow');
const isValidDate = require('../isValidDate');
const moment = require('moment');

module.exports = date => {
	const diff = getDifferenceFromNow(date, 'years');
	if (!diff || isNaN(diff)) return null;
	return diff >= 18;
};
