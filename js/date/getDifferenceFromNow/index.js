'use strict';

const isValidDate = require('../isValidDate');
const moment = require('moment');

const VALID_UNITS = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];

module.exports = (date, unit) => {
	if (!date || !unit || VALID_UNITS.indexOf(unit.toLowerCase()) < 0) return null;
	date = new Date(date);
	console.log(`>>> date: ${date}`);
	if (!isValidDate(date)) return null;
	const diff = Math.floor(moment.duration(moment().diff(date)).as(unit));
	console.log('--------------------');
	console.log(date);
	console.log(diff);
	console.log(unit);
	console.log('--------------------');
	return diff;
};
