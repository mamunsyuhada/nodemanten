const joi = require('joi');
const moment = require('moment-timezone');

const postWish =  joi.object({
  author: joi.string().min(1).max(64).required(),
  attendace: joi.string().valid('hadir', 'tidak hadir', 'mungkin hadir').required(),
  wish: joi.string().min(1).max(256).required(),
  updatedAt: joi.date().forbidden().default(moment.tz(Date.now(), 'Asia/Jakarta')),
  createdAt: joi.date().forbidden().default(joi.ref('updatedAt')),
});

module.exports = {
  postWish,
};