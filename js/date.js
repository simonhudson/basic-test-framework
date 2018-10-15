'use strict';

const moment = require('moment');

const isValidDate = date => date instanceof Date && !isNaN(date);

const toIsoString = value => {
	if (!value || typeof value !== 'string') return null;
	const date = new Date(value);
	if (!isValidDate(date)) return null;
	return date.toISOString();
};

const getDifferenceFromToday = (startDate, unit) => {
	
	const VALID_UNITS = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];
	
	if (!value || typeof value !== 'string' || !unit || typeof unit !== 'string' || !VALID_UNITS.includes(unit)) return null;
	const date = moment(toIsoString(value));
	const diff = moment.duration(moment().diff(date)).as(unit);
	console.log('--------------------');
	console.log(diff);
	console.log('--------------------');
	return diff;
};

module.exports = {
	toIsoString
	getDifferenceFromToday
};