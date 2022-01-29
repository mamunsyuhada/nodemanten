const express = require('express');
const log = require('morgan');
const methodOverride = require('method-override');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const wishRoute = require('../module/wish/router');
const subcribeRoute = require('../module/subcribe/router');

const app = express();
app.use(log('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.urlencoded({ extended: true }));
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(helmet());

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;