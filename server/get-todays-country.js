const ALL_COUNTRIES = require('./all-countries');
const now = new Date();
const fullDaysSinceEpoch = Math.floor(now / 8.64e7);
const todaysWinner = fullDaysSinceEpoch % (ALL_COUNTRIES.length - 1);

module.exports = () => ALL_COUNTRIES[todaysWinner];