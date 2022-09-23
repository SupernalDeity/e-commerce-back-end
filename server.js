const express = require('express');
const routes = require('./routes');
// imports sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turns on routes
app.use(routes);

// turns on connection to db and server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
