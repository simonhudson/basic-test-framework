'use strict';

const isValidDate = require('../isValidDate');
const moment = require('moment');

const VALID_UNITS = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];

module.exports = (date, unit) => {
	console.log(typeof date, date);
	if (!date || !unit || VALID_UNITS.indexOf(unit.toLowerCase()) < 0) return null;
	date = new Date(date);
	if (!isValidDate(date)) return null;
	const diff = Math.floor(moment.duration(moment().diff(date)).as(unit));
	return diff;
};
