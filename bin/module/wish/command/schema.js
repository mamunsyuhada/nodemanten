const joi = require('joi');

const postWish =  joi.object({
  author: joi.string().min(1).max(25).required(),
  attendace: joi.string().valid('hadir', 'tidak hadir', 'mungkin hadir').required(),
  wish: joi.string().min(1).max(128).required(),
});

module.exports = {
  postWish,
};