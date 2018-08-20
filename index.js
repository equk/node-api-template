const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(logger('dev'));

app.use('/', routes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

module.exports = app;