const express = require('express');
const morgan = require('morgan');
const tourRouter = require('../src/controllers/tourControllers');

const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);

module.exports = app;
