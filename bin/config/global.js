require('dotenv').config();

module.exports = {
  appPort: Number(process.env.APP_PORT) || 3001,
  appHost: Number(process.env.HOST),
  mongooUri: process.env.MONGO_URI || 'mongodb://localhost:27017/manten',
};