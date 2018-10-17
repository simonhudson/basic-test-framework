'use strict';

const moment = require('moment');

module.exports = date => {
	if (!date) return null;
	date = new Date(date);
	if (!date instanceof Date || isNaN(date)) return null;
	const diff = Math.floor(moment.duration(moment().diff(date)).as('years'));
	if (!diff || isNaN(diff)) return null;
	return diff >= 18;
};
