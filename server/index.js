const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const apiRoutes = require('./api');
const apolloServer = require('./graphql');

dotenv.config();
app.use(cors());

app.use(express.static('build'));

app.use('/api', apiRoutes);
apolloServer.applyMiddleware({ app });

const PORT = process.env.SERVER_PORT;
app.listen(PORT, function () {
  console.log(`Todays country listening on port ${PORT}!`);
});
