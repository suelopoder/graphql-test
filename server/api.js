const express = require('express');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

const getTodaysCountry = require('./get-todays-country');
const apiRoutes = new express.Router();

const MAX_RESULTS = 5;
const NEWS_API = 'https://newsapi.org/v2/top-headlines';
const NEWS_URL = countryCode =>
  `${NEWS_API}?apiKey=${process.env.NEWS_API_KEY}&country=${countryCode}&pageSize=${MAX_RESULTS}`;

apiRoutes.get('/country', function (req, res) {
  res.send({ code: getTodaysCountry() });
});

apiRoutes.get('/news', function (req, res) {
  const country = getTodaysCountry();
  fetch(NEWS_URL(country), { timeout: 10*1000 })
    .then(data => data.json())
    .then(data => {
      console.log('Extra extra, news from', country, data);
      res.send(data.articles);
    })
    .catch(err => {
      console.error('Error fetching news from', country, err);
      res.statusCode = 500;
      res.send(err);
    });
});


module.exports = apiRoutes;