const data = require('./data');
const getTodaysCountry = require('../get-todays-country');

const resolvers = {
  Query: {
    countries: () => data,
    country: (parent, args) =>
      data.find(country => country.code === args.code),
    countryOfTheDay: () =>
      data.find(country => country.code === getTodaysCountry()),
  }
};

module.exports = resolvers;