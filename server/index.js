const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const apiRoutes = require('./api');
const apolloServer = require('./graphql');

dotenv.config();
app.use(cors());

app.get('/', function (req, res) {
  // TODO server static result from building client
  res.send('Hello World!');
});

app.use('/api', apiRoutes);
// app.use('/graphql', graphqlRoutes);
apolloServer.applyMiddleware({ app });

const PORT = process.env.SERVER_PORT;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
