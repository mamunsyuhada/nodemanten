const mongoose = require('mongoose');
const { mongooUri } = require('../config/global');
const logger = require('../util/logger');

module.exports = {
  init: () => {
    const ctx = 'mongo.js-connectMongo';
    mongoose.connect(mongooUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      logger.info(ctx, `Successfully connected to the database ${mongooUri}`);
    }).catch(err => {
      logger.error(ctx, 'Could not connect to the database. Exiting now...', err);
      process.exit();
    });
  }
};