'use strict';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

module.exports = (value, truncate) => {
	value = parseInt(value, 10);
	if (isNaN(value) || (value > 11 || value < 0)) return null;
	value = value -1;
	truncate = truncate ? truncate : false;
	let monthName = MONTHS[value];
	if (truncate && typeof truncate === 'boolean') monthName = monthName.substr(0, 3);
	return monthName;
};