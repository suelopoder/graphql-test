const express = require('express');
const app = express();
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const cors = require('cors');

fetch.Promise = Bluebird;
dotenv.config();
app.use(cors());

app.get('/', function (req, res) {
  // TODO server static result from building client
  res.send('Hello World!');
});

const MAX_RESULTS = 5;
const NEWS_API = 'https://newsapi.org/v2/top-headlines';
const NEWS_URL = countryCode =>
  `${NEWS_API}?apiKey=${process.env.NEWS_API_KEY}&country=${countryCode}&pageSize=${MAX_RESULTS}`;

app.get('/api/news', function (req, res) {
  fetch(NEWS_URL('ar'))
    .then(data => data.json())
    .then(data => res.send(data.articles))
    .catch(err => res.statusCode(500).send(err));
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
