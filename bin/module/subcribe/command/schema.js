const joi = require('joi');
const moment = require('moment-timezone');

const subscribeEmail =  joi.object({
  email: joi.string().email().required(),
  updatedAt: joi.date().forbidden().default(moment.tz(Date.now(), 'Asia/Jakarta')),
  createdAt: joi.date().forbidden().default(joi.ref('updatedAt')),
});

module.exports = {
  subscribeEmail,
};